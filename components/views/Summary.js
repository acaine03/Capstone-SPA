let client = "Admin"
let incomeBank = 3828.92
let ameren = 140.23
let spire = 92.12
let internet = 162.38
let carPayment = 1000.32
let insurance = 200.12
let rent = 1274.52
let phone = 250.23
let groceries = 300
let gas = 120
let oil = 100
let clothing = 80
let games = 60
let recreational = 200



let totalBills = [ameren + spire + internet + carPayment + 
    insurance + rent + phone];
console.log(totalBills)

let leftOver = [incomeBank - totalBills]
console.log(leftOver)

let obligations = [groceries + gas + oil]
console.log(obligations)

let misc = [clothing + games + recreational]
console.log(misc)

let moneyInPocket = [leftOver - obligations]
console.log(moneyInPocket)

export default () => `
    <div class="right-side-content">

        <div class="summary-greeting">

            <h3>Hello, ${client}.</h3><br>

        </div>

        <div class="summary-content">

            <div class="bills">

                <h2>Bills</h2>
                Estimated Monthly Income: $${incomeBank}  <a>change</a><br><br>
                Electric Bill Total: $${ameren}  <a>change</a><br>
                Gas Bill Total: $${spire}  <a>change</a><br>
                Internet Bill: $${internet}  <a>change</a><br>
                Car Payment: $${carPayment}  <a>change</a><br>
                Insurance: $${insurance}  <a>change</a><br>
                Rent/Mortgage: $${rent}  <a>change</a><br>
                Phone Bill: $${phone}  <a>change</a><br>
                Total expenses: $${totalBills}<br><br>
                When bills are payed: $${leftOver}


            </div>

            <div class="obligations">

                <h2>Obligations</h2>

                <div class="other-expenses">

                    Monthly Groceries: $${groceries} <a>change</a><br>
                    Monthly Gas: $${gas} <a>change</a><br>
                    Oil Change: $${oil} <a>change</a><br><br>

                    Total: $${obligations}

                </div>

                <div class="misc">

                    <h2>Miscellaneous</h2>
                    Clothing: $${clothing} <a>change</a><br>
                    Games: $${games} <a>change</a><br>
                    Recreational: $${recreational} <a>change</a><br><br>

                    Total: $${misc}

                </div>

            </div>

            <div class="money-in-pocket">
                    
                <h2>Decisions</h2>
                
                Money left over before misc. spending: $${moneyInPocket} <br>
                
            </div>

        </div>

        
        
    </div>
`;