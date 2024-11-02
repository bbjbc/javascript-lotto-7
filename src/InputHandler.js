import InputView from "./views/InputView";
import { LottoNumberValidator } from "./validator/LottoNumberValidator";
import { BonusNumberValidator } from "./validator/BonusNumberValidator";
import { PurchaseValidator } from "./validator/PurchaseValidator";
import { Parser } from "./parser/Parser";

class InputHandler {
  // 구매 금액 입력받아 검증 후 반환
  static async getPurchaseAmount() {
    const input = await InputView.inputPurchaseAmount();
    const amount = Number(input);
    PurchaseValidator.validatePurchaseAmount(amount);
    return amount;
  }

  // 당첨 번호 입력받아 검증 후 반환
  static async getWinningNumbers() {
    const input = await InputView.inputWinningNumbers();
    const numbers = Parser.parseLottoNumbers(input);
    LottoNumberValidator.validateLottoNumbers(numbers);
    return numbers;
  }

  // 보너스 번호 입력받아 검증 후 반환
  static async getBonusNumber(winningNumbers) {
    const input = await InputView.inputBonusNumber();
    const bonusNumber = Number(input);
    BonusNumberValidator.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default InputHandler;
