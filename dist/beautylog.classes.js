/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var tableHelpers = {
    makeRow: function (cellCounterArg, colorArg) {
        if (cellCounterArg === void 0) { cellCounterArg = 2; }
        if (colorArg === void 0) { colorArg = "cyan"; }
        var rowArray = [];
        for (var i = 0; i < (cellCounterArg); i++) {
            rowArray.push(String(i + 1).cyan);
        }
        return rowArray;
    }
};
var ConsoleTable = (function () {
    function ConsoleTable(tableTypeArg, tableHeadArrayArg) {
        if (tableHeadArrayArg === void 0) { tableHeadArrayArg = tableHelpers.makeRow(); }
        switch (tableTypeArg) {
            case "checks":
                this.tableHead = ['Check Item:'.cyan, 'Status:'.cyan];
                break;
            case "custom":
                this.tableHead = tableHeadArrayArg;
                break;
            default:
                break;
        }
        this.rows = [];
        this.type = tableTypeArg;
    }
    ConsoleTable.prototype.push = function (row) {
        this.rows.push(row);
    };
    ConsoleTable.prototype.print = function () {
        var table = new plugins.cliTable({
            head: this.tableHead
        });
        for (var row in this.rows) {
            if (this.rows[row][1] == "success") {
                this.rows[row][1] = ' '.bgGreen + ' ' + this.rows[row][1];
            }
            else if (this.rows[row][1] == "error") {
                this.rows[row][1] = ' '.bgRed + ' ' + this.rows[row][1];
            }
            table.push(this.rows[row]);
        }
        ;
        console.log(table.toString());
    };
    return ConsoleTable;
})();
exports.ConsoleTable = ConsoleTable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLnRzIl0sIm5hbWVzIjpbIkNvbnNvbGVUYWJsZSIsIkNvbnNvbGVUYWJsZS5jb25zdHJ1Y3RvciIsIkNvbnNvbGVUYWJsZS5wdXNoIiwiQ29uc29sZVRhYmxlLnByaW50Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFDNUMsSUFBTyxPQUFPLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUVoRCxJQUFJLFlBQVksR0FBRztJQUNmLE9BQU8sRUFBRSxVQUFTLGNBQXlCLEVBQUMsUUFBd0I7UUFBbEQsOEJBQXlCLEdBQXpCLGtCQUF5QjtRQUFDLHdCQUF3QixHQUF4QixpQkFBd0I7UUFDaEUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FDSixDQUFDO0FBRUY7SUFJSUEsc0JBQVlBLFlBQW1CQSxFQUFDQSxpQkFBbURBO1FBQW5EQyxpQ0FBbURBLEdBQW5EQSxvQkFBNkJBLFlBQVlBLENBQUNBLE9BQU9BLEVBQUVBO1FBQy9FQSxNQUFNQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsS0FBS0EsUUFBUUE7Z0JBQ1RBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLEVBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyREEsS0FBS0EsQ0FBQ0E7WUFDVkEsS0FBS0EsUUFBUUE7Z0JBQ1RBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7Z0JBQ25DQSxLQUFLQSxDQUFDQTtZQUNWQTtnQkFDSUEsS0FBS0EsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsWUFBWUEsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBQ0RELDJCQUFJQSxHQUFKQSxVQUFLQSxHQUFZQTtRQUNiRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFDREYsNEJBQUtBLEdBQUxBO1FBQ0lHLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBO1lBQzdCQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQTtTQUN2QkEsQ0FBQ0EsQ0FBQ0E7UUFDSEEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDdkJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLFNBQVNBLENBQUNBLENBQUFBLENBQUNBO2dCQUMvQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsT0FBT0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDOURBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUN0Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLENBQUNBO1lBQ0RBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUFBQSxDQUFDQTtRQUNGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFDTEgsbUJBQUNBO0FBQURBLENBbkNBLEFBbUNDQSxJQUFBO0FBbkNZLG9CQUFZLGVBbUN4QixDQUFBIiwiZmlsZSI6ImJlYXV0eWxvZy5jbGFzc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9iZWF1dHlsb2cucGx1Z2luc1wiKTtcblxudmFyIHRhYmxlSGVscGVycyA9IHtcbiAgICBtYWtlUm93OiBmdW5jdGlvbihjZWxsQ291bnRlckFyZzpudW1iZXIgPSAyLGNvbG9yQXJnOnN0cmluZyA9IFwiY3lhblwiKXtcbiAgICAgICAgdmFyIHJvd0FycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgKGNlbGxDb3VudGVyQXJnKTsgaSsrKSB7XG4gICAgICAgICAgICByb3dBcnJheS5wdXNoKFN0cmluZyhpICsgMSkuY3lhbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd0FycmF5O1xuICAgIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlVGFibGUge1xuICAgIHRhYmxlSGVhZDpzdHJpbmdbXTtcbiAgICByb3dzO1xuICAgIHR5cGU6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHRhYmxlVHlwZUFyZzpzdHJpbmcsdGFibGVIZWFkQXJyYXlBcmc6c3RyaW5nW10gPSB0YWJsZUhlbHBlcnMubWFrZVJvdygpKSB7XG4gICAgICAgIHN3aXRjaCAodGFibGVUeXBlQXJnKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZUhlYWQgPSBbJ0NoZWNrIEl0ZW06Jy5jeWFuLCdTdGF0dXM6Jy5jeWFuXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSGVhZCA9IHRhYmxlSGVhZEFycmF5QXJnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICAgICAgdGhpcy50eXBlID0gdGFibGVUeXBlQXJnO1xuICAgIH1cbiAgICBwdXNoKHJvdzpzdHJpbmdbXSl7XG4gICAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHByaW50KCkge1xuICAgICAgICB2YXIgdGFibGUgPSBuZXcgcGx1Z2lucy5jbGlUYWJsZSh7XG4gICAgICAgICAgICBoZWFkOiB0aGlzLnRhYmxlSGVhZFxuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMucm93cyl7XG4gICAgICAgICAgICBpZih0aGlzLnJvd3Nbcm93XVsxXSA9PSBcInN1Y2Nlc3NcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzW3Jvd11bMV0gPSAnICcuYmdHcmVlbiArICcgJyArIHRoaXMucm93c1tyb3ddWzFdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvd3Nbcm93XVsxXSA9PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3Nbcm93XVsxXSA9ICcgJy5iZ1JlZCArICcgJyArIHRoaXMucm93c1tyb3ddWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUucHVzaCh0aGlzLnJvd3Nbcm93XSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRhYmxlLnRvU3RyaW5nKCkpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==