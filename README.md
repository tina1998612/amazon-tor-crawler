# Amazon Tor Crawler

This is an app that crawls Amazon's product price every 5 seconds. It uses the NPM package [tor-request](https://github.com/talmobi/tor-request) to send http requests through Tor. The crawling results will be saved in a csv.

This the console output after successfully running this app:

```
Your public (through Tor) IP is: 199.87.154.255
$54.99,
Saved!
Your public (through Tor) IP is: 95.130.9.90
$54.99,
Saved!
Your public (through Tor) IP is: 37.187.94.86
$54.99,
Saved!
Your public (through Tor) IP is: 37.187.94.86
$54.99,
Saved!
Your public (through Tor) IP is: 176.10.99.200
$54.99,
```

## Usage

1. Connect to a AWS Ubuntu VM

```
ssh -i "~/hack/aws/tom-amazon-crawler.pem" ubuntu@ec2-18-219-3-201.us-east-2.compute.amazonaws.com
```

2. Install Tor

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

7. Real time visualizing how the output file amazon.csv changes

```
tail -f amazon.csv
```

8. Run the whole process in the background and gently disconnect with the AWS instance

```
nohup bash init.sh &
disown <PID>
exit
```
