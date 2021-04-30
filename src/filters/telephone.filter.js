export default function telephoneFilter(value) {
    debugger
    return value.replace(/[\-\(\)]/g, "");
  }