$(document).ready(function() {
    $('.listItemInput').focus();

    $(document)

        // Add to list
        .on('click', '.addToList', function() {
            var itemToAdd = $('input[name="listItemInput"]').val().trim();
            if ( itemToAdd ) {
                $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
            }
            $('.listItemInput').val('').focus();
        })

        // Remove from list
        .on('change', '.item', function() {
            if( $(this).is(':checked') ){
                var parentElem = $(this).parent();
                parentElem.effect('puff', 500, function() {
                    parentElem.remove();
                });
            }
        });

    $('.addToListForm').submit( function(e) {
        e.preventDefault();

        return false;
    });

    // Make the list sortable
    $('.listItems').sortable();


});