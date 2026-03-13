import fs from 'fs';

const csv = fs.readFileSync('/Users/hansraj316/.openclaw/workspace/pannas-com/target_countries_128.csv', 'utf-8');
const lines = csv.split('\n').filter(l => l.trim() !== '');
const headers = lines.shift().split(','); // Country,Region,Priority Tier

const countries = lines.map((line, index) => {
    // some names might have commas. Let's assume no commas in country names here.
    const parts = line.split(',');
    const tier = parts.pop();
    const region = parts.pop();
    const name = parts.join(','); // In case there are commas in the name
    
    // Simple code logic: first two uppercase letters of the name + index
    const code = name.replace(/[^a-zA-Z]/g, '').substring(0, 2).toUpperCase() + index;
    
    return {
        code,
        name: name.replace(/^"|"$/g, ''),
        region: region.replace(/^"|"$/g, ''),
        tier: parseInt(tier, 10)
    };
});

// Sort countries alphabetically
countries.sort((a, b) => a.name.localeCompare(b.name));

const output = `export interface Country {
  code: string;
  name: string;
  region: string;
  tier: number;
}

export const countries: Country[] = ${JSON.stringify(countries, null, 2)};\n`;

fs.writeFileSync('/Users/hansraj316/.openclaw/workspace/pannas-com/src/data/countries.ts', output);
console.log('Done!');
