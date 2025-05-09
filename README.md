# Interview Questions - Blog Task



## What are some differences between interfaces and types in TypeScript?

### interface 
Interface is used in only non primitive data
If you want to add more type in this you should use "extends" operator
Interface is support in conditional types

### types
Types us used on primitive and non primitive both data
If you want to add more type in this you should use "&" operator
Types support in conditonal types



## Provide an example of using union and intersection types in TypeScript.

### Union > either/or
if i want to use any data as option then i should use Union (|), example : 
In the playground allowed either male or female ==> type Gender = {"Male"| "Female"}

### Intersection > both/and
if i want to use all data then i should use Intersection (&), example :
You should eat dinner and take medicine ==> type Routine ={"dinner" & "medicine"}