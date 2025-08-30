#![no_std]
pub fn banned_country(a: &str) -> bool {
    let mut chars = a.trim().chars().map(|c| c.to_ascii_lowercase());
    return chars.next() == Some('u') && chars.next() == Some('k') && chars.next() == None;
}
