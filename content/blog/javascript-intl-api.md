---
title: "How I format dates on moglicodes.dev"
description: "Today I used the Intl API for the first time. It's awesome!"
category: Javascript
date: 09/09/2022
navigation:
    title: 'Home'
    icon: '🏡'
---

# How I format dates on moglicodes.dev

## TLDR; Show me the code

    ```javascript
    const locale = 'en-GB'
    const fullFormat = new Intl.DateTimeFormat(locale, { dateStyle: 'full'})
    const ordinalSuffixes = {
    "one": "st",
    "two": "nd",
    "few": "rd",
    "other": "th"
    };
    const ordinalPluralRules = new Intl.PluralRules("en", { type: "ordinal" });
    
    export const useConvertToLocaleDateString = (
    _date,
    _locale = 'en-GB',
    _options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    ) => {
    
        const date = new Date(_date)
        const parts = fullFormat.formatToParts(date);
        const weekDayName = parts.find(p => p.type === "weekday").value;
        const dayName = parts.find(p => p.type === "day").value;
        const monthName = parts.find(p => p.type === "month").value;
        const year = parts.find(p => p.type === "year").value
        const dayWithSuffix = withOrdinalSuffix(Number(dayName));
        return \`${weekDayName}, ${dayWithSuffix} ${monthName} ${year}\`
    }
    
    function withOrdinalSuffix(x) {
        if(typeof x != "number") throw new TypeError(\`Expected Number but received ${typeof x}\`);
        if(x < 1) throw new RangeError(\`Expected a number > 0 but received ${x}\`);
        const ordinal = ordinalPluralRules.select(x);
        if (!ordinal in ordinalSuffixes) throw new Error(\`Unexpected ordinal ${ordinal}\`);
        const suffix = ordinalSuffixes[ordinal];
        return \`${x}${suffix}\`;
    }
```