# BACKEND-THEORY

## Things to learn as a backend engineer
1. Communication protocols:
 - Communication protocols. (TCP, UDP), Why tcp slow?

 - How http work? What is HTTP?

 - Web sockets

 - GRPC

 - RFCs




2.  Web servers

Etags, etags mechanism , caching, threads, 

3. Database engineering

Log strcutured, tree structured, relational databases, nosql
 - Acid
 - Atomicity
 - Durabiloity
 - Isolation

4. Proxy

 - microservices
 - Reverse Proxy
 - Caching layers
 - Load Balancers
 - TLS termination
 - Services mreshes

5. Caching

 - Messaging system. (queue, RabbitMQ)

6. Web frameworks

7. Message Format (XML, Json)

8. Security (Network sec, Data security)

## What is a server? 

From node js repo.

## Mac address


A MAC address (Media Access Control address) is a unique identifier assigned to the network interface of a device, such as a computer, smartphone, or router. It is used to identify and communicate with devices on a local network, like a Wi-Fi or Ethernet network.

- The MAC address is typically a 12-character alphanumeric string (48 bits), displayed in six groups of two hexadecimal digits, separated by colons or hyphens. For example, 00:1A:2B:3C:4D:5E.

- MAC addresses are used at the data link layer of the OSI model to ensure devices can be properly identified on a network, especially in local area networks (LANs).

MAC address is not used over the internet. It operates at the data link layer (Layer 2) of the OSI model, which is responsible for communication within a local network (LAN). A MAC address is used to uniquely identify devices on a local network, such as a Wi-Fi or Ethernet network.

## IP address

An IP address (Internet Protocol address) is a unique identifier assigned to each device connected to a network, allowing it to communicate with other devices over the internet or local network.

There are two types of IP addresses:

1. IPv4 (Internet Protocol version 4): This is the most commonly used format, consisting of four sets of numbers (each between 0 and 255), separated by periods (e.g., 192.168.1.1).

2, IPv6 (Internet Protocol version 6): A newer format designed to accommodate the growing number of devices connected to the internet. IPv6 addresses are much longer, containing eight groups of four hexadecimal digits (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

IP addresses serve two main purposes:

1. Identification: They identify a device on a network.

2. Location addressing: They indicate the location of a device on a network, allowing for proper routing of data between devices.

IP address is used over the internet to identify devices and route data between them. It operates at the network layer (Layer 3) of the OSI model and is essential for communication across networks, including the internet.

## OSI Model

Standardizes communication in computer systems. Internet runs on this, phones runs on this, LAN, router.

Stands for Open systems interconnection model.


## With example

When a mobile device tries to access a webpage from another device on the same network, the process involves several layers of the OSI (Open Systems Interconnection) model. Here’s how it works step-by-step:

1. Application Layer (Layer 7):
Function: This layer is responsible for the actual communication between applications. It provides network services to end-user applications.
In this case: The mobile device (client) uses a web browser (such as Chrome or Safari), which runs at the Application layer. The user enters a URL, and the browser sends a HTTP request to the other device (web server) over the network.
2. Presentation Layer (Layer 6):
Function: This layer is responsible for translating data formats, encryption, and compression.
In this case: The web browser on the mobile device might encode or compress the data for transmission, and the web server will decode and decompress it. However, this is often transparent to the user in most cases when browsing.
3. Session Layer (Layer 5):
Function: This layer manages sessions between devices, ensuring continuous exchange of data.
In this case: The mobile device establishes a session with the web server. It keeps track of the communication between the client and the server, managing cookies and maintaining the state of the connection, especially in protocols like HTTP or HTTPS.
4. Transport Layer (Layer 4):
Function: This layer ensures reliable data transfer by using protocols like TCP (Transmission Control Protocol) or UDP (User Datagram Protocol). It handles error correction, flow control, and data segmentation.
In this case: The mobile device sends the HTTP request using TCP. TCP breaks the message into smaller packets, ensures they arrive in order, and handles retransmission if necessary.
5. Network Layer (Layer 3):
Function: This layer is responsible for routing data across networks and assigning logical IP addresses.
In this case: The mobile device uses its IP address to locate the web server within the same local network. The request is sent using the IP address of the web server device, and routers (if necessary) route the data to the correct location within the network.
6. Data Link Layer (Layer 2):
Function: This layer deals with physical addressing and ensures data is transferred correctly within the same local network. It is responsible for defining how data is packaged and addressed at the hardware level.
In this case: The mobile device uses its MAC address to communicate with the router or directly with the web server (depending on network setup). It encapsulates the IP packet into a frame, which is sent over the local network via Ethernet (for wired) or Wi-Fi (for wireless).
7. Physical Layer (Layer 1):
Function: This layer handles the physical transmission of data over the network medium (e.g., cables, radio waves).
In this case: The data is transmitted as electrical signals (over Ethernet or Wi-Fi) between the mobile device and the router or directly to the web server if it’s connected locally.
Summary of the Flow:
Mobile device (client): Sends a request (e.g., HTTP request) at the Application layer.
The data is then prepared, encoded, and prepared for session management at the Session layer.
TCP at the Transport layer breaks the data into segments, which are sent to the Network layer with the correct IP address.
The Data Link layer adds a MAC address to the packets for routing within the local network (if not directly communicating via a switch).
The Physical layer transmits the data as signals through the network medium (Wi-Fi or Ethernet).
Once the web server (the other device on the same network) receives the HTTP request, it processes the request and sends the response back through the same layers in reverse order.

In essence, the IP address ensures the request is routed correctly within the local network, and the MAC address allows the devices to communicate on the local network segment.