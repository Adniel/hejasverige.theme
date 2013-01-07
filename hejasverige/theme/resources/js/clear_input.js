function myFocus(element) {
                            if (element.value == element.defaultValue) { element.value = ''; }
}
 
function myBlur(element) {
      if (element.value == '') { element.value = element.defaultValue; }
}