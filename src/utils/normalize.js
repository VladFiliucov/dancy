export default function normalize(string) {
  return string.length < 150 
    ? string
    : (string.slice(0, 150) + '...')
}

