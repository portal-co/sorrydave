const trim: (a: string) => string = String.prototype.trim.call.bind(
  String.prototype.trim
);
const toLowerCase: (a: string) => string =
  String.prototype.toLowerCase.call.bind(String.prototype.toLowerCase);
export function banned_country(a: string): boolean {
  return toLowerCase(trim(a)) == "uk";
}
