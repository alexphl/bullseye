## What's this?

A stock tracking app. It was originally a part of a bigger, team project done for a class - check
out [the Stockvision repo](https://github.com/alexphl/csci4177_g19_project).
This repo isolates that as I have no interest in maintatining the rest of the project. All work is my own.

## Wheres are you getting the data?

Courtesy of [Finnhub.io](https://finnhub.io).

## Your app is slow 😡

Sorry. I am working with a rate limit of 30 requests/second. For example, each stock widget needs 3 separate requests to
display - current stock price, company detail, chart data - it's how the Finnhub API is laid out. There is already a LOT
of caching and tricks at play to make this usable. A distributed Redis cache layer may be added at some point.

