# Morphemer

A simple tool used to construct words from smaller segments of other words. I created it to use as a fantasy name generator but it is not limited to that.

## Morphemes
A morpheme is the smallest **meaningful** unit of language. They are the pieces of words that you can hear used over and over again. They are word building-blocks, and some can stand as words on their own. For example, the word "unspeakable" can be broken into three morphemes: *un*-*speak*-*able*.

Each morpheme has contexts in which it may or may not occur. The *un* morpheme cannot occur unless it is bound to another morpheme, and is usually (always?) word-initial.


## The Morphemer way
In Morphemer, the term *morpheme* is used loosely -- if not downright incorrectly. Morphemer has no notion of meaning when it parses words. It breaks up strings into 1-to-**n**-length segments, where **n** is arbitrary. This means that given the word "unspeakable" and **n** is at least 3, Morphemer will register *uns*, *un*, *ns*, *u*, *n*, and *s* as Morphemes (among others).

These smaller character sequences make up a Morpheme along with their contexts: any 1-to-**n**-length character sequences preceding or following the Morpheme segment are stored as well. Each context segment is stored with its respective context segment (redunancy favored for indexing). For example, from 'unspeakable', Morphemer will make a Morpheme for *speak* with:

* Occurring before *speak*:
  * *un*, when *speak* occurs before *able*

* Occurring after *speak*:
  * *able*, when *speak* occurs after *un*