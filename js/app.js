$('#flashMessage').hide();

$('#previewButton').click(() => {
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

    $('#flashMessage')
    .slideDown(1000)
    .delay(2000)
    .slideUp();
})