const summaryPage=require('../../img/summary.jpg')
const educationPage=require('../../img/education.jpg')
const vehiclePage=require('../../img/vehicle.jpg')
const bankingPage=require('../../img/banking.jpg')
const billPayPage=require('../../img/pay-bills.jpg')
const apartmentsPage=require('../../img/apartment.jpg')
const counselingPage=require('../../img/counseling.jpg')

export default () => `

    <div class="right-side-content">
    
        <div class="home-nav">

          <a><img src="${summaryPage}" class="summary"><figcaption>Summary</figcaption></a>
          <a><img src="${educationPage}" class="education"><figcaption>Education</figcaption></a>
          <a><img src="${vehiclePage}" class="vehicle"><figcaption>Your Vehicle</figcaption></a>
          <a><img src="${apartmentsPage}" class="apartments"><figcaption>Apartments</figcaption></a>
          <a><img src="${billPayPage}" class="bill pay"><figcaption>Bill Pay</figcaption></a>
          <a><img src="${bankingPage}" class="banking"><figcaption>Banking</figcaption></a>
          <a><img src="${counselingPage}" class="counseling"><figcaption>Counseling</figcaption></a>

        </div>

    </div>
`;


