import React from 'react'

function TermModal() {
  return (
    <div style={{
        "background":"black"
     
    }}>
     <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{
     "background":"black",
     "color":"white"
  
    }}
     >
  Terms and conditions
</div >

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Terms and conditions Maanof-Federation</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{
        "text-align" : "left"
      }}>
        <h5 align="left">Term & Conditions</h5>
   <p>• By using this website, you are accepting the terms and conditions. They 
are effective from your first visit. <br />
• Maanof Federation may change these terms and conditions from time to 
time; your use of the website indicates your acceptance of the terms and 
conditions at the time of use.  <br />
• Maanof Federation reserves the right to change the content of the 
website at any time.  <br />
• Maanof Federation has taken every precaution to make sure the content 
of this website is accurate and legally correct at the time of appearance. 
If you believe the content of any of our pages is inaccurate, please 
contact us, email maanoffederation@gmail.com  <br />
• Maanof Federation accepts no liability for loss or damage, including 
personal injury, resulting from use of this website. makes all reasonable 
efforts to make sure malware or viruses are not transmitted from this 
website, however this cannot be guaranteed. We recommend that you 
safeguard your IT equipment before downloading information and files. 
Maanof Federation will not accept liability for damage caused by viruses.  <br />
• When we provide links to other websites it does not mean that we 
approve of or endorse the views and information contained on the 
website. We accept no liability for damage caused by malware or viruses 
on websites that we have linked to.  <br />
• Please request permission before using our logos or other branded 
material. We reserve the right to require our logo to be removed from 
websites or printed material if it is not in our interests.  <br />
• Our downloadable documents, brochures and web pages are provided for 
your use. You may copy or print the information for private purposes 
including teaching. You may not amend the content or use it for 
commercial purposes without Maanof Federation’ written consent.  <br />
• Images and photos used on this website are the property of Maanof 
Federation or other Copyright owners. The may not be reproduced or 
used without Maanof Federation’ or the copyright owner’s written 
consent. <br />
• If there is any conflict between these terms and conditions and rules or 
specific terms of use relating to specific material, then the latter shall 
prevail.</p>

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

export default TermModal
