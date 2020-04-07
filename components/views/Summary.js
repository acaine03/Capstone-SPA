let client = "Admin"
let incomeBank = 3328.92
let ameren = 140.23
let spire = 92.12
let internet = 162.38
let carPayment = 1000.32
let insurance = 200.12
let rent = 1274.52
let phone = 250.23


let totalBills = [ameren + spire + internet + carPayment + 
    insurance + rent + phone];

console.log(totalBills)

let leftOver = [incomeBank - totalBills]



export default () => `
    <div class="right-side-content">

        <div class="greeting">

            Hello, ${client}.

        </div>

        <div class="bills">

            Monthly Income: $${incomeBank}  <a>change</a><br><br>
            Electric Bill Total: $${ameren}  <a>change</a><br>
            Gas Bill Total: $${spire}  <a>change</a><br>
            Internet Bill: $${internet}  <a>change</a><br>
            Car Payment: $${carPayment}  <a>change</a><br>
            Insurance: $${insurance}  <a>change</a><br>
            Rent/Mortgage: $${rent}  <a>change</a><br>
            Phone Bill: $${phone}  <a>change</a><br>
            Total expenses: $${totalBills}<br><br>
            Potential Savings: $${leftOver}


        </div>

        <div class="obligations">

            <h2>Obligations</h2>
        
        </div>

        
    </div>
`;