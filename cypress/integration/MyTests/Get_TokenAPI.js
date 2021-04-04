describe('Getting Token',()=>{    

    it.only('POST',()=>{

        cy.request({
            method:'POST',
            url: 'https://merchant-api.api.sandbox.divido.net/applications',
            body:{
            "merchant_reference": "1548302020",
            "applicants": [
              {
                "gender": "female",
                "phoneNumber": "2012312312",
                "firstName": "Ann",
                "dateOfBirthMonth": "09",
                "addresses": [
                  {
                    "postcode": "BA13 3BN",
                    "text": "15 High street Westbury BA13 3BN"
                  }
                ],
                "dateOfBirthDay": "02",
                "email": "ann.helselden@gmail.com",
                "dateOfBirthYear": "1990",
                "lastName": "Heselden"
              }
            ],
            "finance_plan_id": "8f751666-7e96-49d0-92d3-73a0360315e0",
            "merchant_redirect_url": "",
            "deposit_amount": 15000,
            "merchant_checkout_url": "",
            "metadata": {
              "foo-example-key": "bar-example-value"
            },
            "merchant_response_url": "http://example.com/webhook",
            "order_items": [
              {
                "quantity": 1,
                "name": "Computer",
                "price": 146000,
                "vat": 0
              }
            ]
          },

          headers:{
              'content-type':'application/json',
              'Accept': 'application/json',
              'X-DIVIDO-API-KEY': 'sandbox_098634df.bf1a2f4d38a01ac0bf246bd6a1565d1a'
          }

        }).then((response)=>{   
           expect(response.status).to.eq(201)
           expect(response.body).to.not.be.null

           //Country
           expect(response.body.data).have.property('country')
           expect(response.body.data.country).to.deep.equal({
            id: "GB", 
            name: "United Kingdom"
           })

           //Applicants data check
           expect(response.body.data).have.property('applicants')    

           expect(response.body.data.applicants[0].firstName).equal('Ann')
           expect(response.body.data.applicants[0].email).equal('ann.helselden@gmail.com')
           
           //Payable amount
           expect(response.body.data.amounts.total_repayable_amount).equal(146000)
           
           //Postcode
           expect(response.body.data.applicants[0].addresses[0].postcode).equal('BA13 3BN')

           //Order item
           expect(response.body.data.order_items[0].name).equal('Computer')
           

            
        })

    })



})