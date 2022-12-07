 # Load-Balancing-using-HAProxy

Owing to increase in multiple servers worldwide there is a severe need to load balance so ensure proper user traffic.
LOad Balancing also defined as a performance optimization method  that provides fault-tolerance by splitting any incoming request across multiple computing resources, thereby preventing any one resource from becoming overloaded.
The aim of this project is to create a customised software load balancer using the framework of a pre existing TCP load balancer : HAProxy.
HAProxy is a free and open source software that provides a high availability load balancer and reverse proxy for TCP and HTTP-based applications that spreads requests across multiple servers. Major environments even Github uses HAProxy.

![This is an image](https://www.stackpath.com/static/f1b5692b84f7aa7f3da3e6f987ea0a3d/what-is-load-balancing-r1.png)

In this project I have tried to configure load balancing using three ways. In each case the deafult configuration file of HAProxy has been customised as per need.

1.Spinning up multiple application servers using a python code and then load balancing it using HAProxy.

2.HA Kubernetes Cluster Using Keepalived and HAproxy (In progress)

3.Load Balancing configuartion for apache /netcat servers.

The reason for this approach using software load balancing is due to its scalability,security,programability and easy to deploy.

## Case 1: Spinning up multiple application servers and running them on different ports and load balancing them

 1. Installation of HAProxy in Ubuntu

*sudo add-apt-repository -y ppa:vbernat/haproxy-1.5*.  

*sudo apt-get update*

*sudo apt-get install -y haproxy*


 2. Using python code to synthesize multiple application servers capable to run in any unused accessible port from terminal.
 
 3. Configuring the HAProxy.cfg file by opening in nano mode in terminal or creating a new one to implement load balancing alogorithm(RoundRobin used in this case) and declaring frontent,backend and stats nodes.

 4.In the configuration file of HAProxy we need to exactly mention the port numbers for which we have spun the application servers.

 5.Execution of the configuration file

 6.In the browser when we enter localhost:<port>.Here the port refers to the port at which our load balancing will be running.As we hit it we get response from any of the application servers we have spun up.It keeps on giving message from any of the application servers following round robin fashion.

 7.Vewing of HAProxy stats .

 8.Execution Results attached in Case 1 Result File.
 
 ## Case 2: HA Kubernetes Cluster Using Keepalived and HAproxy (In progress)
 
 1. Multi node creation in GCP 
    - Creation of master,Node1,Node2 instance in GCP.
    + Creation of public key pair using ssh-keygen -t -rsa to copy the SSH key and add in the configuration of all the instances.(SSH in browser)
    * Installation of kubekey by curl command
    - Creating a cluster using configuration file
    - Verification of installation
 
 2. HAProxy configuration and keepalived set up.
    

 
 
