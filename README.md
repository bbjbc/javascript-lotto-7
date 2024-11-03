# javascript-lotto-precourse

## 📝 기능 요구사항

1. 로또 발급 규칙

   - 로또의 번호 범위는 1~45이다.
   - 1개의 로또 당 6개의 숫자가 중복되지 않는다.
   - 중복되지 않는 6개의 숫자와 보너스 번호 1개가 있다.

2. 당첨 기준 및 금액

   - 1등: 6개 번호 일치 (2,000,000,000원)
   - 2등: 5개 번호 + 보너스 번호 일치 (30,000,000원)
   - 3등: 5개 번호 일치 (1,500,000원)
   - 4등: 4개 번호 일치 (50,000원)
   - 5등: 3개 번호 일치 (5,000원)

3. 구매

   - 로또 1장 당 가격은 1,000원
   - 구입 금액만큼 로또를 발행한다.

4. 에러 처리
   - 잘못된 값 입력 시 "[ERROR]"로 시작하는 에러 메시지를 출력한다.

## 👀 로또 구현 요구사항

1. 로또와 관련한 상수 분리

   - [x] 상금 관련 상수 정의
   - [x] 로또 실행과 관련 상수 정의
   - [x] 에러 메시지 상수 정의

2. 입력값 검증

   - [x] 로또 번호의 개수 검증 (6개)
   - [x] 로또 번호의 범위 검증 (1~45)
   - [x] 로또 번호의 중복 검증
   - [x] 로또 구매 금액의 유효성 검증 (1,000원 단위)
   - [x] 숫자인지 검증
   - [x] 음수인지 검증
   - [x] 각 검증 사항에 대한 테스트 케이스 작성

3. 로또 생성

   - [x] 구입 금액에 해당하는 로또 수량 계산
   - [x] 1~45에서의 번호 6개 생성
   - [x] 번호 오름차순 정렬
   - [x] 로또 생성에 대한 테스트 케이스 작성

4. 당첨 번호 입력

   - [x] 쉼표 구분하는 로직 추가
   - [x] 쉼표로 구분된 당첨 번호 입력 받기
   - [x] 보너스 번호까지 입력 받기
   - [x] 입력값 검증에 따른 입력 형식을 검증하여 테스트

5. 당첨 확인

   - [x] 구매 로또 번호와 당첨 번호 비교
   - [x] 일치하는 번호의 개수 저장
   - [x] 보너스 번호 일치 여부 확인
   - [x] 당첨금 계산
   - [x] 당첨 결과 업데이트
   - [x] 당첨 번호와 일치하는지 테스트
   - [x] 보너스 번호와 일치하는지 테스트

6. 결과 출력

   - [x] 구매한 로또 수량 출력
   - [x] 구매한 로또 번호를 오름차순으로 출력
   - [x] 당첨된 내역 출력
   - [x] 수익률 출력
   - [x] 수익률 계산 테스트
   - [x] 출력 형식이 올바른지 테스트
   - [x] 수익률이 소수점 첫째 자리까지 출력되는지 테스트

7. 전체적인 흐름
   - [x] 구매부터 결과 출력까지 연결
   - [x] ApplicationTest 테스트

## ⚠️ 예외 처리

1. 금액

   - 1,000원 단위가 아닌 금액일 경우
   - 숫자가 아닌 입력일 경우
   - 음수의 금액일 경우

2. 보너스 번호

   - 당첨 번호와 중복될 경우
   - 잘못된 형식의 입력일 경우

3. 로또 번호

   - 6개가 아닌 개수의 번호일 경우
   - 1~45의 범위를 벗어난 번호일 경우
   - 중복된 번호일 경우
   - 잘못된 형식의 입력일 경우
