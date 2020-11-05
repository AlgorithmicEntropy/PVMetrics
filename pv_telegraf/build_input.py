# load main config file
head_file = open('head.toml', 'r')
head_txt = head_file.read()
head_file.close()

# load input preamble
preamble_file = open('input_preamble.toml')
preamble_txt = preamble_file.read()
preamble_file.close()

# load json queries
query_file = open('query.txt')
queries = query_file.readlines()
query_file.close()

# remove trailing newlines
for i in range(len(queries) - 1):
    queries[i] = queries[i][0:-1]

# build json query line
json_query = '    json_query = \"{'
for query in queries:
    json_query += query + ','

json_query += '}\"\n'

processors_rename = '\n[[processors.rename]]\n'

# generate replace config
processors_replace = ''
for query in queries:
    processors_replace += '[[processors.rename.replace]]\n'
    field_name = query.split('.')[-1]
    processors_replace += f"    field = \"{field_name + '_value'}\"\n"
    processors_replace += f"    dest = \"{field_name}\"\n\n"

# build final output string
output_str = head_txt
output_str += '\n\n'
output_str += preamble_txt
output_str += '\n'
output_str += json_query
output_str += processors_rename
output_str += '\n'
output_str += processors_replace

# write to file
output_file = open('telegraf.conf', 'w')
output_file.write(output_str)
output_file.close()


