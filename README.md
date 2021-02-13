# tstest

Ok, this time I need study typescript, I will create a front-end message notification system.

Basicly speaking, this one will looks like the change notification of Angular, or, I am not sure, rxjs?

The requirement would be,

1. Support subscribe to any attribute of any object.
2. When the attribute changed, update/notify all the subscribers.
3. Optimize, create different type of source, data source, or intermedia source.
a. data source are real source who will produce new data.
b. inermedia source who don't really produce data, but they could subcribe some attribute from data source and change themselves and then notify those subscribers of their attribute.
c. The intermedia source could be optmized. 
4. Another optimize, on HMI, the subcription would be a lot, we need active/inactive statue change. This one could be originazed by group.
a. a group is a runtime object group.
b. a group could be active or inactive.
c. for a inactive, the data source should be consider as not active, means the data source should not update them.
