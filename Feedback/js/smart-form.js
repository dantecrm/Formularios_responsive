	$(function() {
			   
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
								firstname: {
										required: true,
										minlength: 2
								},		
								email: {
										required: true,
										email: true
								},
								mobile: {
										required: true,
										number: true,
										minlength: 10,
										maxlength: 12
								},								
								department: {
										required: true
								},								
								comment: {
										required: true,
										minlength: 10
								},
								'improve[]':{
										required:true
								}								
						},
						
						/* @validation error messages 
						---------------------------------------------- */
							
						messages:{
								firstname: {
										required: 'Enter your firstname',
										minlength: 'Firstname must at least be 2 characters'
								},				
								email: {
										required: 'Enter your email address',
										email: 'Enter a VALID email address'
								},
								mobile: {
										required: 'Enter your mobile phone number',
										number: 'Phone number must include numbers only',
										minlength: 'Phone number must not be less than 10 numbers',
										maxlength: 'Phone number must not exceed 12 numbers'										
								},								
								department: {
										required: 'Please select a department'
								},																
								comment: {
										required: 'Oops you forgot to comment',
										minlength: 'Comment must be at least 10 characters'
								},
								'improve[]':{
										required: 'Please check at least one option'
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
											$('.alert-success').show().delay(2000).fadeOut();
											$('.field').removeClass("state-error, state-success");
											if( $('.alert-error').length == 0){
												$('#smart-form').resetForm();
												setTimeout(function () {
												   window.location.replace("http://doptiq.com/smart-forms/demos/working/elegant/csv/php/dataview.php");
												}, 3000);												
											}
									 }
							  });
						}
						
				});		
		
	});				
    