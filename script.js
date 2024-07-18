const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // def divide(arr, n):
    result = []
    current_subarray = []
    current_sum = 0

    for num in arr:
        if current_sum + num <= n:
            current_subarray.append(num)
            current_sum += num
        else:
            result.append(current_subarray)
            current_subarray = [num]
            current_sum = num

    if current_subarray:
        result.append(current_subarray)

    return result
		 
		
	}
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
