Imagine there's a series of steps to do a thing:
- step 1
- step 2
- step 3
- step 4
- step 5
- step 6
- step 7
- step 8
- step 9
- step 10


This is a gross oversimplification for illustration

Now imagine those steps were broke up across a number of objects...

Object A
- step 1
- step 2

Object B
- step 3
- step 4
- step 5
- step 6

Object C
- step 7
- step 8
- step 9

Object D
- step 10


Now what if a better domain abstraction invovles breaking those steps up differently...

I could imagine a case where in the normally branching world of our code it could be very hard to see the "better" domain abstraction when the separation of concerns has been done along implementation lines instead of domain lines.
How do you play with the code such that you head toward the dmoain one when it may not be obvious how to "unroll" the code such that you could see the better domain abstraction

So for example given a new level of understanding of our domain the current local maximum might be


Object A
- step 1
- step 2

Object B
- step 3
- step 4

Object E
- step 5
- step 6

Object C
- step 7
- step 8

Object F
- step 9

Object D
- step 10


And yet I've seen cases where it wasn't until we inlined a whole bunch of stuff that we were able to "see" the better design

I guess what I'm getting at is I feel there are times where in the course of pulling out functions/methods to break up big methods we may inadvertently make improve the design from a domain standpoint harder to see.

I'm not sure if there's anything to be "done" about it. I've just been trying to get this idea out of my head for discussion and this is the closest it's come to something undertandable and yet is far from ideal description of what's in my head.

It's almost along the lines of how your parallelize a process you can slice vertical or horizontal and they both may improve things and yet it's a pretty big fork in the road

What I fear is that many junior folks will inadvertently make things worse while "doing the right thing" and I'm not sure how best to give them tools to help them detect when they might be doing it

And heck how do I hone that sense myself in a way that is describable to others?