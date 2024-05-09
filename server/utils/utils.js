// HC: used in Search/Search Results
export function filterCustomers(filterVal, inputVal, sourceList) {
    if (inputVal === "") {
        return sourceList;
    }

    const tempList = [...sourceList];
    if (inputVal.length >= 1) {
        const tempVal = inputVal.trim().toLowerCase();

        return tempList.filter((item) => {
            if (filterVal === "name") {
                const tempName = item.firstName + " " + item.lastName;
                return tempName.toLowerCase().indexOf(tempVal) > -1;
            }
            return item.id.indexOf(tempVal) > -1;
        });
    }
}
