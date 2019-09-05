<div class="model-container">
	<div class="model">
		<div class="model-header">
			<h3 class="heading">Add Book </h3>
			</div>
		<form id="bookForm">
			<div class="group">
				<input type="text"  id="bookName" name="bookName" class="control" placeholder="Book Name...">
				<div class="error nameError"></div>
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="text"  id="bookAuthor" name="bookAuthor" class="control" placeholder="Author Name...">
				<div class="error authorError"></div>
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="number"  id="bookPrice" name="bookPrice" class="control" placeholder="Book Price...">
				<div class="error priceError"></div>
			</div>
			<!-- Close group -->

			<input type="hidden" id="bookStatus" value="addBook">
			<input type="hidden" name="hiddenId" id="bookId">

			<div class="group">
				<input type="submit"  id="bookButton" class="btn btn-sweet" value="Add book &#8250;">
			</div>
			<!-- Close group -->
		</form>
		<!-- Close form -->
	</div>
	<!-- Close model -->
</div>
<!-- Close model-container -->