# Chunking Javascript Arrays

I recently have been looking into methods of chunking javascript arrays into an array of smaller arrays when I stumbled upon [this article in Medium](https://medium.com/@Dragonza/four-ways-to-chunk-an-array-e19c889eac4) which covered a few different methods for chunking an array. 

Not wanting to put random code into production I decided to test these methods out and see which was the most performant and I was fairly shocked by the results. 

### Testing 

For my testing methodology I generate an random array that contains between 1 and 70,000 numbers. Then I test each one of the four methods with that array and rinse and repeat 100 times.

During each pass I calculate how long the chunking took and add it to the total that is stored in the timevalues array. At the very end I divide the time by the number of passes giving us the average amount of time the pass took. 

### Results

I was pretty shocked by some of the performance values. The chunkSlice method was by far the most performant. I believe this is becuase it is performing the fewest opeations on the original array. I would need to do further research for why this is but the big takeaway for me is that using the built in functionality and not mutating the original array is the way to go.

```
chunkFor:  1 ms
chunkForChunks:  6.58 ms
chunkSlice:  0.09 ms
chunkRecurse:  308.95 ms
```