function validateEmail(email){
  if (typeof(email) === "string") {
    // 문자열을 배열로 변환
    const emailArray = Array.from(email);

    // '@' 와 '.' 문자를 필터링
    const filteredArray = emailArray.filter(char => {
      if (char === '@') {
        return true;
      } else if (char === '.') {
        return true;
      } else {
        return false;
      }
    })
  }
}