define([ 'globalModel', ],
        function(globalModel) {

            // DateTime custom functions
            Date.prototype.toCustomDateTimeString = function() {
                return this.toLocaleString('en-GB', globalModel
                        .get('dateTimeOptions'));
            };

            Date.prototype.toCustomDateString = function() {
                return this.toLocaleDateString('en-GB', globalModel
                        .get('dateOptions'));
            };
            String.prototype.isNumeric = function() {
                return !jQuery.isArray(this)
                        && (this - parseFloat(this) + 1) >= 0;
            };
            return {};
        });
