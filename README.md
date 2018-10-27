# Amazon Tor Crawler

This is an app that crawls Amazon's product price every 5 seconds. It uses the NPM package [tor-request](https://github.com/talmobi/tor-request) to send http requests through Tor. The crawling results will be saved in a csv.

## Usage

1. After connecting to a AWS Ubuntu VM, install tor

```
sudo apt-get update
sudo apt install tor
```

2. Set up to programmatically refresh the Tor session

```
sudo tor --hash-password giraffe
sudo chmod 777 /etc/tor/torrc
vim /etc/tor/torrc
```

paste the following in the torrc file:

```
ControlPort 9051
HashedControlPassword 16:AEBC98A6777A318660659EC88648EF43EDACF4C20D564B20FF244E81DF
```

3. Launch Tor

```
sudo service tor start
```

Do `sudo service tor stop` if it is already started

4. Clone this repository

```
git clone https://github.com/tina1998612/amazon-tor-crawler.git
```

5. Install packages

```
sudo apt install npm
cd amazon-tor-crawler
npm install
```

6. Start crawling Amazon with different IPs changed every 5 seconds!

```
npm start
```
