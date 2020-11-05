# PV Metrics Collector
This repo contains the needed parts to collect metrics from a solarwatt energyManager device

## Contents
The metrics collector consists of two parts

#### 1. pv_process_api
Acts as an API relay between telegraf and the device endpoint
Ensures consistency within the returned data

#### 2. pv_telegraf
Collects processed metrics from the custom api relay and forwards them to an influxDB instance