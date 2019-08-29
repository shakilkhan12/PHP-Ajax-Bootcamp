<?php include "startSession.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Create user account</title>
	
	<!-- Include css links -->
	<?php include "components/cssLinks.php"; ?>
</head>
<body>
	
	<div class="account-split">

		<div class="messageSection">

		</div>
		<!-- Close messageSection -->
		<div class="formSection">
		<div class="formSectionParent">
           <div class="formSectionContainer">
				<?php if(isset($_SESSION['accountCreated'])): ?>
				<div class="alert success">
		<div class="alert-icon"><div class="alertIcon">&check;</div></div>
		<p> <strong>Success!</strong> <?php echo $_SESSION['accountCreated']; ?></p>
	</div>
	<!-- Close alert -->
<?php endif; unset($_SESSION['accountCreated']); ?>
		        <!-- Include login form -->
				<?php include "components/loginForm.php"; ?>

		   </div>
		   <!-- Close formSectionContainer -->
		   </div>
		   <!-- Close formSectionParent -->
		</div>
		<!-- Close formSection -->

	</div>
	<!-- Close account-split -->

	<script src="assets/js/hideMessage.js"></script>
	
</body>
</html>