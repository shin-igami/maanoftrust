import React from 'react'

function RefundModal() {
  return (
    <div style={{
        "background":"black"
     
    }}>
     <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{
     "background":"black",
     "color":"white"
    
    }}
     >
Donation Refund Policy
</div >

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Donation Refund Policy Maanof-Federation</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{
        "text-align" : "left"
      }}>
        <h5 align="left">Donation Refund Policy</h5>
   <p>
Maanof Federation has instituted a donation refund policy to ensure fair and 
transparent processing of requests for refund of donations as digital payments 
are becoming more frequent. <br /> Maanof Federation expects that all donors will 
exercise due care and diligence while making donations.<br /> Maanof Federation 
also recognizes that a donation may be made erroneously, or donors may 
change their mind.<br /> Maanof Federation will examine request for refund of 
donation and endeavor to make the refund.<br /> Maanof India may also seek proper 
explanation and reason from the user. Also, it will require further verification 
of the user and need documents of proof as well as for donation.<br />
Your refund request must contain the details such as Date of Donation, Amount 
of Donation, Mode of Donation i.e. Credit Card or Online Payment and should 
reach Maanof Federation office within 7 (Seven) days from the date on which 
you made the donation i.e.:<br />
• The date on which you Made the donation online, electronically or 
through other means, OR<br />
• The date on which you Handed over the cheque / demand draft to MaAnof
Federation or someone authorised by Maanof Federation for this purpose, OR <br />
• The date on which you Despatched the cheque / demand draft to Maanof 
Federation by other means.</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  
      </div>
    </div>
  </div>
</div>
    
    </div>
  )
}

export default RefundModal
