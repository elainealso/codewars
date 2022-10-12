// Create a function which translates a given DNA string into RNA. Example: let dna = "GCAT"; // GCAU

// My solution:
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// Others:
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
