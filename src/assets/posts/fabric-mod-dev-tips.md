---
title: Fabric mod development tips
description: A collection of tips and tricks for mod developers.
date: 2025-05-10
---

After a bit long time of creating Fabric mods for Minecraft. I collected some tips and tricks that I found useful for mod development and want to share it.  
Because I'm not good at Java so these codes below are written in Kotlin.

## 1. Utilities functions

These _life savers_ functions that I always use when developing mods.

### 1.1 toEnglishName(path)

```TextFormatting.kt#kotlin
import java.util.Locale

fun toEnglishName(name: String): String {
        return name.lowercase(Locale.ROOT).split("_").joinToString(" ") {
            it.replaceFirstChar { char -> char.uppercaseChar() }
        }
    }
```

This function will convert a `name` with any formats (camel_case, snake_case, etc.) to readable English name.  
For instance:  
`wrench` -> `Wrench`  
`lava_generator` -> `Lava Generator`

## 2. Utilities classes

### 2.1 Identifier

Instead of spamming long `ResourceLocation`, we should make a class extends it and only receive path. This will decrease the amount of code we need to write.

```Identifier.kt#kotlin
class Identifier(path: String) : ResourceLocation(MOD_NAME, path) {}
```

By using that, we can replace this:
```kotlin
val wrench = ResourceLocation(MOD_ID, "wrench")
val lavaGenerator = ResourceLocation(MOD_ID, "lava_generator")
```
to this:
```kotlin
val wrench = Identifier("wrench")
val lavaGenerator = Identifier("lava_generator")
```
