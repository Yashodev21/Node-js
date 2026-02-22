// Explain fs streaming vs buffered operations.

// Buffered (readFile)-->
// Loads entire file into memory
// Not good for large files

// Streaming (createReadStream)-->
// Reads chunk by chunk
// Memory efficient
// Faster for big files

