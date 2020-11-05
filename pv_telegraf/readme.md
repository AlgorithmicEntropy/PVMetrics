# Telegraf container to collect solarwatt energyManager metrics
This container collects processed metrics from the energyManager Api and forwards them to influxDB

#### Enviroment Config
+ DB_URL: Output Influx DB URL
+ DB_NAME: Database to write metrics
+ DB_RP_NAME: Retention Policy
+ DB_PASSWORD: Database Password
+ DB_USER: Database user
+ API_URL: Data parsing api endpoint URL