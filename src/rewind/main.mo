import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor rewind {
  stable var countNumber: Float = 300;

  stable var startTime = Time.now();

  Debug.print(debug_show(startTime));

  public func addNumber(amount: Float){
    countNumber += amount;
    Debug.print(debug_show(countNumber));
  };

  public func subtractNumber(amount: Float){
    let errorNumber: Float = countNumber - amount;
    if (errorNumber >= 0){
      countNumber -= amount;
      Debug.print(debug_show(countNumber));
    }else{
      Debug.print("too low xD");
    };
  };

  public query func checkBalance(): async Float{
    return countNumber;
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    Debug.print(debug_show(currentTime));

    countNumber := countNumber * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;

    Debug.print(debug_show(countNumber));
  };
}