
let totalAmount=20000;
  
  let withdarawalBtn=document.getElementById('withdarawal');
  let billPay=document.getElementById('billPay');
  let ballanceInquiryBtn=document.getElementById('ballanceInquiry');
  let ref=document.getElementById('ref');
  let btnReff=document.getElementById('btnReff');
  
  let transferBtn=document.getElementById('transfer');
  let depositBtn=document.getElementById('deposit');
  let otherTransaction=document.getElementById('otherTransaction');
  let firstText=document.getElementById('firstText');
  let firstText2=document.getElementById('firstText2');
  let Exit=document.getElementById('Exit');
  let btnOK=document.getElementById('btnOK');
  let btnOK2=document.getElementById('btnOK2');
  let amounts=document.getElementById('amounts');
  let secondText=document.getElementById('secondText');
  let secondText2=document.getElementById('secondText2');
  let amount=document.getElementById('amount');
  let amount2=document.getElementById('amount2');
  let doubleTransactions=document.getElementById('doubleTransactions');
  let  amountIn=document.getElementById('amountIn').value;
  let back=document.getElementById('back');
  let lin1=document.getElementById('lin1');
  let lin2=document.getElementById('lin2');
  let transactions=document.getElementById('transactions');
  let btnsSecreen=document.getElementById('btnsSecreen');
     let pin1=document.getElementById('pin1').value;
  let btnEnter=document.getElementById('btnEnter');
  let pas=document.getElementById('pas');
  let num=document.getElementById('num');
  let pinMsg=document.getElementById('pinMsg');
  let billPayDiv=document.getElementById('billPayDiv');
  let pinDiv=document.getElementById('pinDiv');
  let pinHeading=document.getElementById('pinHeading');
  withdarawalBtn.onclick=withdarawal;
  
  function withdarawal(){
  
  btnsSecreen.style.display="none";
  transactions.style.display="block";
  firstText.innerHTML="Please Enter Your Amount ";
    
  }
  
  btnOK.onclick=OK;
  function OK(){
  let  amountIn=document.getElementById('amountIn').value;
  if(amountIn<totalAmount){
  secondText.innerHTML="Transaction Succesed £"+amountIn;
  amount.innerHTML="Remaining amount is £"+(totalAmount-amountIn);
  back.innerHTML="Back to main secreen";}
  else{
  secondText.innerHTML="You don't have enough credit";
  amount.innerHTML="Your total ballance is £"+totalAmount;
  back.innerHTML="Back to main secreen";}
  
  }
  btnOK2.onclick=OK2;
  function OK2(){
  let  amountIn2=document.getElementById('amountIn2').value;
  if(amountIn2<totalAmount){
  secondText2.innerHTML="Transaction Succesed £"+amountIn2;
  amount2.innerHTML="Remaining amount is £"+(totalAmount-amountIn2);
  back.innerHTML="Back to main secreen";}
  else{
  secondText2.innerHTML="You don't have enough credit";
  amount2.innerHTML="Your total ballance is £"+totalAmount;
  back.innerHTML="Back to main secreen";}
  
  }
  
  
  lin2.onclick=Back;
  function Back(){
  billPayDiv.style.display="none";
  billPayDiv.style.display="none";
  btnsSecreen.style.display="block";
  }
  btnEnter.onclick=login;
  function login(){
  let pin1=document.getElementById('pin1').value;
  
   if(pin1==1234){
    pas.style.display="none";
    btnsSecreen.style.display="block";
   
   }
   else{
    pinMsg.innerHTML="**Password not matched";
   
   }
  }
  billPay.onclick=billPayment;
  function billPayment(){
  firstText2.innerHTML="Please Enter Bill Refference No";
  btnsSecreen.style.display="none";
  billPayDiv.style.display="block";
  
 
  }
  
  btnReff.onclick=change;
  function change(){
  ref.style.display="none";
  billIn.style.display="block";
  firstText2.innerHTML="Please Enter Your Total Bill";
  
  
  }
  
  
  
  ballanceInquiry.onclick=billInquiry;
  function billInquiry(){
  btnsSecreen.style.display="none";
  billPayDiv.style.display="none";
  transactions.style.display="block";
  ref.style.display="none";
  amounts.style.display="none";
  firstText.innerHTML="Ballance Inquiry";
  secondText.innerHTML="Your Total Ballance is £"+totalAmount;
  
  }
  transferBtn.onclick=transferMoney;
  function transferMoney(){
  transactions.style.display="none";
  
  btnsSecreen.style.display="none";
  billPayDiv.style.display="block";
  firstText2.innerHTML="Enter the account number";
  
  }
  depositBtn.onclick=depositMoney;
  function depositMoney(){
  transactions.style.display="block";
  btnsSecreen.style.display="none";
  billPayDiv.style.display="none";
  firstText.innerHTML="Enter your amount";
  btnOK.onclick=function(){
   let pin1=document.getElementById('pin1').value;
   secondText.innerHTML="Succesfully Added £"+pin1;
   amount.innerHTML="Your new ballance is £"+(totalAmount+Number(pin1));
   
  
  }
  
  }
  Exit.onclick=exit;
  function exit(){
  transactions.style.display="none";
  billPayDiv.style.display="none";
  btnsSecreen.style.display="none";
  pas.style.display="block";
  pinDiv.style.display="none";
  pinHeading.innerHTML="Thankyou for banking with us :)";
  pinMsg.innerHTML="We do not compromise on client safety !";
  
  }
  
back.onclick=Back;
  function Back(){
  location.reload();
  pas.style.display="block";
  transactions.style.display="none";
  billPayDiv.style.display="none";
  
  
   
 
  
  }
 