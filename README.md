# Morphemer
A simple tool used to construct words from smaller segments of other words. I created it to use as a fantasy name generator but it is not limited to that.

## Morphemes
A morpheme is the smallest **meaningful** unit of language. They are the pieces of words that you can hear used over and over again. They are word building-blocks, and some can stand as words on their own. For example, the word "unspeakable" can be broken into three morphemes: *un*-*speak*-*able*.

Each morpheme has contexts in which it may or may not occur. The *un* morpheme cannot occur unless it is bound to another morpheme, and is usually (always?) word-initial.


## The Morphemer way

In Morphemer, the term "morpheme" is used loosely. Morphemer has no notion of meaning when it parses words. It breaks up strings into 1-to-**n**-length segments, where **n** is arbitrary. This means that given the word "unspeakable" and **n** is at least 3, Morphemer will register *uns*, *un*, *ns*, *u*, *n*, and *s* as Morphemes (among others).

These smaller character sequences each make up a Morpheme along with their contexts: any 1-to-**n**-length character sequences preceding or following the Morpheme segment are stored as well. Each context segment is stored with its respective context segment (redundancy favored for indexing). For example, from 'unspeakable', Morphemer will make a Morpheme for *speak* with:

> * Occurring before *speak*:
>   * *un*, when *speak* occurs before *able*
>
> * Occurring after *speak*:
>   * *able*, when *speak* occurs after *un*

Currently, every Morpheme is stored within the generic Morpheme object (the constructor function). When the same segment occurs more than once in a string, the second occurrence updates the existing Morpheme by adding the segment context to the Morpheme's existing context(s). After "unspeakable", if Morphemer parses "speaker" and "speak", the *speak* Morpheme contexts will then include the following:

> * Occurring before *speak*:
>   * *un*
>     * when *speak* occurs before *able*
>   * *(nothing)*
>     * when *speak* occurs before *(nothing)*
>     * when *speak* occurs before *able*
>
> * Occurring after *speak*:
>   * *able*
>     * when *speak* occurs after *un*
>   * *er*
>     * when *speak* occurs after *(nothing)*
>   * (nothing)
>     * when *speak* occurs after *(nothing)*

This example does not include all of the contexts that Morphemer creates for *speak* in "unspeakable", "speaker", and "speak"; *un* contains *n* and *able* contains *abl*, *ab*, and *a*. Each of these can pair with their complementary context(s) (*un* with *able*, *abl*, *ab* and *a*), resulting in a Morpheme with a quickly-growing collection of contexts. Also, every context segment is a Morpheme with its own contextual rules.

## Using Morphemer

### Installation
Move the `Morphemer` directory and the `morphemer.js` file to a directory in your project, and import it into your project with `require`.
```
var morphemer = require('./path/to/morphemer');
```

### Parsing a word
You can add morphemes to Morphemer by using its `parseMorphemes(word, n)` function. This will find all of the possible morphemes in the word up to **n** characters.
```
var morphemer = require('./path/to/morphemer');

morphemer.parseMorphemes('unspeakable',3);
```


### Generating a random word

Morphemer's `generateUtterance()` can create words by joining morphemes that are selected randomly but that adhere to contextual rules. It selects randomly from all of the existing word-initial Morphemes then selects one from the context of the first Morpheme.
```
var morphemer = require('./path/to/morphemer');

morphemer.parseMorphemes('unspeakable',3);
console.log( morphemer.generateUtterance() ); // "kable"
```