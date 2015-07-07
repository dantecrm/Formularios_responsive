	$(function() {
			   
				/* @reload captcha
				------------------------------------------- */			   
				function reloadCaptcha(){
					$("#captcha").attr("src","php/captcha.php?r=" + Math.random());
				}
				
				$('.captcode').click(function(e){
					e.preventDefault();
					reloadCaptcha();
				});				
			   
				$( "#smart-form" ).validate({
				
						/* @validation states + elements 
						------------------------------------------- */
						errorClass: "state-error",
						validClass: "state-success",
						errorElement: "em",
						onkeyup: false,
						onclick: false,
						
						/* @validation rules 
						------------------------------------------ */
						rules: {
								sendername: {
										required: true,
										minlength: 2
								},		
								senderemail: {
										required: true,
										email: true
								},
								sendersubject: {
										required: true,
										minlength: 4
								},								
								sendermessage: {
										required: true,
										minlength: 10
								},
								securitycode:{
										required:true
								}
						},
						
					
						messages:{
								sendername: {
										required: 'Enter your name',
										minlength: 'Name must be at least 2 characters'
								},				
								senderemail: {
										required: 'Enter your email address',
										email: 'Enter a VALID email address'
								},
								sendersubject: {
										required: 'Subject is important',
										minlength: 'Subject must be at least 4 characters'
								},														
								sendermessage: {
										required: 'Oops you forgot your message',
										minlength: 'Message must be at least 10 characters'
								},															
								securitycode:{
										required: 'Please enter security code'
								}
						},

						/* @validation highlighting + error placement  
						---------------------------------------------------- */
						highlight: function(element, errorClass, validClass) {
								$(element).closest('.field').addClass(errorClass).removeClass(validClass);
						},
						unhighlight: function(element, errorClass, validClass) {
								$(element).closest('.field').removeClass(errorClass).addClass(validClass);
						},
						errorPlacement: function(error, element) {
						   if (element.is(":radio") || element.is(":checkbox")) {
									element.closest('.option-group').after(error);
						   } else {
									error.insertAfter(element.parent());
						   }
						},
						
						/* @ajax form submition 
						---------------------------------------------------- */						
						submitHandler:function(form) {
							$(form).ajaxSubmit({
								    target:'.result',			   
									beforeSubmit:function(){ 
											$('.form-footer').addClass('progress');
									},
									error:function(){
											$('.form-footer').removeClass('progress');
									},
									 success:function(){
											$('.form-footer').removeClass('progress');
											$('.alert-success').show().delay(10000).fadeOut();
											$('.field').removeClass("state-error, state-success");
											if( $('.alert-error').length == 0){
												$('#smart-form').resetForm();
												reloadCaptcha();
											}
									 }
							  });
						}
						// end submitHandler:
				});		
		
	});				
    