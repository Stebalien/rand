var searchIndex = {};
searchIndex['rand'] = {"items":[[0,"","rand","Utilities for random number generation"],[3,"OsRng","","A random number generator that retrieves randomness straight from\nthe operating system. Platform sources:"],[3,"Generator","","Iterator which will generate a stream of random items."],[3,"AsciiGenerator","","Iterator which will continuously generate random ascii characters."],[3,"XorShiftRng","","An Xorshift[1] random number\ngenerator."],[3,"Open01","","A wrapper for generating floating point numbers uniformly in the\nopen interval `(0,1)` (not including either endpoint)."],[3,"Closed01","","A wrapper for generating floating point numbers uniformly in the\nclosed interval `[0,1]` (including both endpoints)."],[3,"StdRng","","The standard RNG. This is designed to be efficient on the current\nplatform."],[3,"ThreadRng","","The thread-local RNG."],[5,"weak_rng","","Create a weak random number generator with a default algorithm and seed."],[5,"thread_rng","","Retrieve the lazily-initialized thread-local random number\ngenerator, seeded by the system. Intended to be used in method\nchaining style, e.g. `thread_rng().gen::<i32>()`."],[5,"random","","Generates a random value using the thread-local random number generator."],[5,"sample","","Randomly sample up to `amount` elements from an iterator."],[0,"distributions","","Sampling from random distributions."],[3,"RandSample","rand::distributions","A wrapper for generating types that implement `Rand` via the\n`Sample` & `IndependentSample` traits."],[3,"Weighted","","A value with a particular weight for use with `WeightedChoice`."],[12,"weight","","The numerical weight of this item",0],[12,"item","","The actual item which is being weighted",0],[3,"WeightedChoice","","A distribution that selects from a finite collection of weighted items."],[0,"range","","Generating numbers between two others."],[3,"Range","rand::distributions::range","Sample values uniformly between two bounds."],[8,"SampleRange","","The helper trait for types that have a sensible way to sample\nuniformly between two values. This should not be used directly,\nand is only to facilitate `Range`."],[10,"construct_range","","Construct the `Range` object that `sample_range`\nrequires. This should not ever be called directly, only via\n`Range::new`, which will check that `low < high`, so this\nfunction doesn't have to repeat the check.",1],[10,"sample_range","","Sample a value from the given `Range` with the given `Rng` as\na source of randomness.",1],[11,"new","","Create a new `Range` instance that samples uniformly from\n`[low, high)`. Panics if `low >= high`.",2],[11,"sample","","",2],[11,"ind_sample","","",2],[0,"gamma","rand::distributions","The Gamma and derived distributions."],[3,"Gamma","rand::distributions::gamma","The Gamma distribution `Gamma(shape, scale)` distribution."],[3,"ChiSquared","","The chi-squared distribution `χ²(k)`, where `k` is the degrees of\nfreedom."],[3,"FisherF","","The Fisher F distribution `F(m, n)`."],[3,"StudentT","","The Student t distribution, `t(nu)`, where `nu` is the degrees of\nfreedom."],[11,"new","","Construct an object representing the `Gamma(shape, scale)`\ndistribution.",3],[11,"sample","","",3],[11,"ind_sample","","",3],[11,"new","","Create a new chi-squared distribution with degrees-of-freedom\n`k`. Panics if `k < 0`.",4],[11,"sample","","",4],[11,"ind_sample","","",4],[11,"new","","Create a new `FisherF` distribution, with the given\nparameter. Panics if either `m` or `n` are not positive.",5],[11,"sample","","",5],[11,"ind_sample","","",5],[11,"new","","Create a new Student t distribution with `n` degrees of\nfreedom. Panics if `n <= 0`.",6],[11,"sample","","",6],[11,"ind_sample","","",6],[0,"normal","rand::distributions","The normal and derived distributions."],[3,"StandardNormal","rand::distributions::normal","A wrapper around an `f64` to generate N(0, 1) random numbers\n(a.k.a.  a standard normal, or Gaussian)."],[3,"Normal","","The normal distribution `N(mean, std_dev**2)`."],[3,"LogNormal","","The log-normal distribution `ln N(mean, std_dev**2)`."],[11,"rand","","",7],[11,"new","","Construct a new `Normal` distribution with the given mean and\nstandard deviation.",8],[11,"sample","","",8],[11,"ind_sample","","",8],[11,"new","","Construct a new `LogNormal` distribution with the given mean\nand standard deviation.",9],[11,"sample","","",9],[11,"ind_sample","","",9],[0,"exponential","rand::distributions","The exponential distribution."],[3,"Exp1","rand::distributions::exponential","A wrapper around an `f64` to generate Exp(1) random numbers."],[3,"Exp","","The exponential distribution `Exp(lambda)`."],[11,"rand","","",10],[11,"new","","Construct a new `Exp` with the given shape parameter\n`lambda`. Panics if `lambda <= 0`.",11],[11,"sample","","",11],[11,"ind_sample","","",11],[8,"Sample","rand::distributions","Types that can be used to create a random instance of `Support`."],[10,"sample","","Generate a random value of `Support`, using `rng` as the\nsource of randomness.",12],[8,"IndependentSample","","`Sample`s that do not require keeping track of state."],[10,"ind_sample","","Generate a random value.",13],[11,"sample","","",14],[11,"ind_sample","","",14],[11,"new","","",14],[11,"new","","Create a new `WeightedChoice`.",15],[11,"sample","","",15],[11,"ind_sample","","",15],[0,"isaac","rand","The ISAAC random number generator."],[3,"IsaacRng","rand::isaac","A random number generator that uses the ISAAC algorithm[1]."],[3,"Isaac64Rng","","A random number generator that uses ISAAC-64[1], the 64-bit\nvariant of the ISAAC algorithm."],[11,"new_unseeded","","Create an ISAAC random number generator using the default\nfixed seed.",16],[11,"clone","","",16],[11,"next_u32","","",16],[11,"reseed","","",16],[11,"from_seed","","Create an ISAAC random number generator with a seed. This can\nbe any length, although the maximum number of elements used is\n256 and any more will be silently ignored. A generator\nconstructed with a given seed will generate the same sequence\nof values as all other generators constructed with that seed.",16],[11,"rand","","",16],[11,"new_unseeded","","Create a 64-bit ISAAC random number generator using the\ndefault fixed seed.",17],[11,"clone","","",17],[11,"next_u32","","",17],[11,"next_u64","","",17],[11,"reseed","","",17],[11,"from_seed","","Create an ISAAC random number generator with a seed. This can\nbe any length, although the maximum number of elements used is\n256 and any more will be silently ignored. A generator\nconstructed with a given seed will generate the same sequence\nof values as all other generators constructed with that seed.",17],[11,"rand","","",17],[0,"chacha","rand","The ChaCha random number generator."],[3,"ChaChaRng","rand::chacha","A random number generator that uses the ChaCha20 algorithm [1]."],[11,"clone","","",18],[11,"new_unseeded","","Create an ChaCha random number generator using the default\nfixed key of 8 zero words.",18],[11,"set_counter","","Sets the internal 128-bit ChaCha counter to\na user-provided value. This permits jumping\narbitrarily ahead (or backwards) in the pseudorandom stream.",18],[11,"next_u32","","",18],[11,"reseed","","",18],[11,"from_seed","","Create a ChaCha generator from a seed,\nobtained from a variable-length u32 array.\nOnly up to 8 words are used; if less than 8\nwords are used, the remaining are set to zero.",18],[11,"rand","","",18],[0,"reseeding","rand","A wrapper around another RNG that reseeds it after it\ngenerates a certain number of random bytes."],[3,"ReseedingRng","rand::reseeding","A wrapper around any RNG which reseeds the underlying RNG after it\nhas generated a certain number of random bytes."],[12,"reseeder","","Controls the behaviour when reseeding the RNG.",19],[3,"ReseedWithDefault","","Reseed an RNG using a `Default` instance. This reseeds by\nreplacing the RNG with the result of a `Default::default` call."],[8,"Reseeder","","Something that can be used to reseed an RNG via `ReseedingRng`."],[10,"reseed","","Reseed the given RNG.",20],[11,"new","","Create a new `ReseedingRng` with the given parameters.",19],[11,"reseed_if_necessary","","Reseed the internal RNG if the number of bytes that have been\ngenerated exceed the threshold.",19],[11,"next_u32","","",19],[11,"next_u64","","",19],[11,"fill_bytes","","",19],[11,"reseed","","",19],[11,"from_seed","","Create a new `ReseedingRng` from the given reseeder and\nseed. This uses a default value for `generation_threshold`.",19],[11,"reseed","","",21],[11,"default","","",21],[11,"rand","rand","",22],[11,"rand","","",23],[11,"rand","","",22],[11,"rand","","",23],[11,"rand","core::option","",24],[0,"os","rand","Interfaces to the operating system provided random number\ngenerators."],[11,"new","","Create a new `OsRng`.",25],[11,"next_u32","","",25],[11,"next_u64","","",25],[11,"fill_bytes","","",25],[0,"reader","","A wrapper around any Reader to treat it as an RNG."],[3,"ReaderRng","rand::reader","An RNG that reads random bytes straight from a `Reader`. This will\nwork best with an infinite reader, but this is not required."],[11,"new","","Create a new `ReaderRng` from a `Reader`.",26],[11,"next_u32","","",26],[11,"next_u64","","",26],[11,"fill_bytes","","",26],[8,"Rand","rand","A type that can be randomly generated using an `Rng`."],[10,"rand","","Generates a random instance of this type using the specified source of\nrandomness.",27],[8,"Rng","","A random number generator."],[10,"next_u32","","Return the next random u32.",28],[11,"next_u64","","Return the next random u64.",28],[11,"next_f32","","Return the next random f32 selected from the half-open\ninterval `[0, 1)`.",28],[11,"next_f64","","Return the next random f64 selected from the half-open\ninterval `[0, 1)`.",28],[11,"fill_bytes","","Fill `dest` with random data.",28],[11,"gen","","Return a random value of a `Rand` type.",28],[11,"gen_iter","","Return an iterator that will yield an infinite number of randomly\ngenerated items.",28],[11,"gen_range","","Generate a random value in the range [`low`, `high`).",28],[11,"gen_weighted_bool","","Return a bool with a 1 in n chance of true",28],[11,"gen_ascii_chars","","Return an iterator of random characters from the set A-Z,a-z,0-9.",28],[11,"choose","","Return a random element from `values`.",28],[11,"shuffle","","Shuffle a mutable slice in place.",28],[8,"SeedableRng","","A random number generator that can be explicitly seeded to produce\nthe same stream of randomness multiple times."],[10,"reseed","","Reseed an RNG with the given seed.",29],[10,"from_seed","","Create a new RNG with the given seed.",29],[6,"Item","",""],[11,"next","","",30],[6,"Item","",""],[11,"next","","",31],[11,"clone","","",32],[11,"new_unseeded","","Creates a new XorShiftRng instance which is not seeded.",32],[11,"next_u32","","",32],[11,"reseed","","Reseed an XorShiftRng. This will panic if `seed` is entirely 0.",32],[11,"from_seed","","Create a new XorShiftRng. This will panic if `seed` is entirely 0.",32],[11,"rand","","",32],[11,"clone","","",33],[11,"new","","Create a randomly seeded instance of `StdRng`.",33],[11,"next_u32","","",33],[11,"next_u64","","",33],[11,"reseed","","",33],[11,"from_seed","","",33],[11,"clone","","",34],[11,"next_u32","","",34],[11,"next_u64","","",34],[11,"fill_bytes","","",34]],"paths":[[3,"Weighted"],[8,"SampleRange"],[3,"Range"],[3,"Gamma"],[3,"ChiSquared"],[3,"FisherF"],[3,"StudentT"],[3,"StandardNormal"],[3,"Normal"],[3,"LogNormal"],[3,"Exp1"],[3,"Exp"],[8,"Sample"],[8,"IndependentSample"],[3,"RandSample"],[3,"WeightedChoice"],[3,"IsaacRng"],[3,"Isaac64Rng"],[3,"ChaChaRng"],[3,"ReseedingRng"],[8,"Reseeder"],[3,"ReseedWithDefault"],[3,"Open01"],[3,"Closed01"],[4,"Option"],[3,"OsRng"],[3,"ReaderRng"],[8,"Rand"],[8,"Rng"],[8,"SeedableRng"],[3,"Generator"],[3,"AsciiGenerator"],[3,"XorShiftRng"],[3,"StdRng"],[3,"ThreadRng"]]};
searchIndex['log'] = {"items":[[0,"","log","A lightweight logging facade."],[3,"LogRecord","","The \"payload\" of a log message."],[3,"LogLocation","","The location of a log message."],[12,"module_path","","The module path of the message.",0],[12,"file","","The source file containing the message.",0],[12,"line","","The line containing the message.",0],[3,"MaxLogLevelFilter","","A token providing read and write access to the global maximum log level\nfilter."],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has already been called."],[4,"LogLevel","","An enum representing the available verbosity levels of the logging framework"],[13,"Error","","The \"error\" level.",1],[13,"Warn","","The \"warn\" level.",1],[13,"Info","","The \"info\" level.",1],[13,"Debug","","The \"debug\" level.",1],[13,"Trace","","The \"trace\" level.",1],[4,"LogLevelFilter","","An enum representing the available verbosity level filters of the logging\nframework."],[13,"Off","","A level lower than all log levels.",2],[13,"Error","","Corresponds to the `Error` log level.",2],[13,"Warn","","Corresponds to the `Warn` log level.",2],[13,"Info","","Corresponds to the `Trace` log level.",2],[13,"Debug","","Corresponds to the `Debug` log level.",2],[13,"Trace","","Corresponds to the `Trace` log level.",2],[5,"max_log_level","","Returns the current maximum log level."],[5,"set_logger","","Sets the global logger."],[5,"enabled","","Determines if the current logger will ignore a log message at the specified\nlevel from the specified module."],[5,"log","","Logs a message."],[8,"Log","","A trait encapsulating the operations required of a logger"],[10,"enabled","","Determines if a log message sent at the specified level from the\nspecified module would be logged.",3],[10,"log","","Logs the `LogRecord`.",3],[11,"fmt","","",1],[11,"clone","","",1],[11,"eq","","",1],[11,"eq","","",1],[11,"partial_cmp","","",1],[11,"partial_cmp","","",1],[11,"cmp","","",1],[6,"Err","",""],[11,"from_str","","",1],[11,"fmt","","",1],[11,"max","","Returns the most verbose logging level.",1],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",1],[11,"fmt","","",2],[11,"clone","","",2],[11,"eq","","",2],[11,"eq","","",2],[11,"partial_cmp","","",2],[11,"partial_cmp","","",2],[11,"cmp","","",2],[6,"Err","",""],[11,"from_str","","",2],[11,"fmt","","",2],[11,"max","","Returns the most verbose logging level filter.",2],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",2],[11,"new","","Creates a new `LogRecord`.",4],[11,"args","","The message body.",4],[11,"location","","The location of the log directive.",4],[11,"level","","The verbosity level of the message.",4],[11,"fmt","","",0],[11,"clone","","",0],[11,"fmt","","",5],[11,"get","","Gets the current maximum log level filter.",5],[11,"set","","Sets the maximum log level.",5],[11,"fmt","","",6],[11,"fmt","","",6],[11,"description","","",6],[14,"log!","","The standard logging macro."],[14,"error!","","Logs a message at the error level."],[14,"warn!","","Logs a message at the warn level."],[14,"info!","","Logs a message at the info level."],[14,"debug!","","Logs a message at the debug level."],[14,"trace!","","Logs a message at the trace level."],[14,"log_enabled!","","Determines if a message logged at the specified level in that module will\nbe logged."]],"paths":[[3,"LogLocation"],[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"]]};

searchIndex['libc'] = {"items":[[0,"","libc","Bindings for the C standard library and other platform libraries"],[0,"types","",""],[0,"common","libc::types",""],[0,"c95","libc::types::common",""],[4,"c_void","libc::types::common::c95","Type used to construct void pointers for use with C."],[13,"__variant1","","",0],[13,"__variant2","","",0],[4,"FILE","",""],[4,"fpos_t","",""],[0,"c99","libc::types::common",""],[6,"int8_t","libc::types::common::c99",""],[6,"int16_t","",""],[6,"int32_t","",""],[6,"int64_t","",""],[6,"uint8_t","",""],[6,"uint16_t","",""],[6,"uint32_t","",""],[6,"uint64_t","",""],[0,"posix88","libc::types::common",""],[4,"DIR","libc::types::common::posix88",""],[4,"dirent_t","",""],[0,"os","libc::types",""],[0,"common","libc::types::os",""],[0,"posix01","libc::types::os::common",""],[3,"glob_t","libc::types::os::common::posix01",""],[12,"gl_pathc","","",1],[12,"gl_pathv","","",1],[12,"gl_offs","","",1],[12,"__unused1","","",1],[12,"__unused2","","",1],[12,"__unused3","","",1],[12,"__unused4","","",1],[12,"__unused5","","",1],[3,"timeval","",""],[12,"tv_sec","","",2],[12,"tv_usec","","",2],[3,"timespec","",""],[12,"tv_sec","","",3],[12,"tv_nsec","","",3],[4,"timezone","",""],[6,"pthread_t","",""],[6,"sighandler_t","",""],[0,"bsd44","libc::types::os::common",""],[3,"sockaddr","libc::types::os::common::bsd44",""],[12,"sa_family","","",4],[12,"sa_data","","",4],[3,"sockaddr_storage","",""],[12,"ss_family","","",5],[12,"__ss_align","","",5],[12,"__ss_pad2","","",5],[3,"sockaddr_in","",""],[12,"sin_family","","",6],[12,"sin_port","","",6],[12,"sin_addr","","",6],[12,"sin_zero","","",6],[3,"in_addr","",""],[12,"s_addr","","",7],[3,"sockaddr_in6","",""],[12,"sin6_family","","",8],[12,"sin6_port","","",8],[12,"sin6_flowinfo","","",8],[12,"sin6_addr","","",8],[12,"sin6_scope_id","","",8],[3,"in6_addr","",""],[12,"s6_addr","","",9],[3,"ip_mreq","",""],[12,"imr_multiaddr","","",10],[12,"imr_interface","","",10],[3,"ip6_mreq","",""],[12,"ipv6mr_multiaddr","","",11],[12,"ipv6mr_interface","","",11],[3,"addrinfo","",""],[12,"ai_flags","","",12],[12,"ai_family","","",12],[12,"ai_socktype","","",12],[12,"ai_protocol","","",12],[12,"ai_addrlen","","",12],[12,"ai_addr","","",12],[12,"ai_canonname","","",12],[12,"ai_next","","",12],[3,"sockaddr_un","",""],[12,"sun_family","","",13],[12,"sun_path","","",13],[3,"ifaddrs","",""],[12,"ifa_next","","",14],[12,"ifa_name","","",14],[12,"ifa_flags","","",14],[12,"ifa_addr","","",14],[12,"ifa_netmask","","",14],[12,"ifa_ifu","","",14],[12,"ifa_data","","",14],[6,"socklen_t","",""],[6,"sa_family_t","",""],[6,"in_port_t","",""],[6,"in_addr_t","",""],[0,"arch","libc::types::os",""],[0,"c95","libc::types::os::arch",""],[6,"c_char","libc::types::os::arch::c95",""],[6,"c_schar","",""],[6,"c_uchar","",""],[6,"c_short","",""],[6,"c_ushort","",""],[6,"c_int","",""],[6,"c_uint","",""],[6,"c_long","",""],[6,"c_ulong","",""],[6,"c_float","",""],[6,"c_double","",""],[6,"size_t","",""],[6,"ptrdiff_t","",""],[6,"clock_t","",""],[6,"time_t","",""],[6,"suseconds_t","",""],[6,"wchar_t","",""],[0,"c99","libc::types::os::arch",""],[6,"c_longlong","libc::types::os::arch::c99",""],[6,"c_ulonglong","",""],[6,"intptr_t","",""],[6,"uintptr_t","",""],[6,"intmax_t","",""],[6,"uintmax_t","",""],[0,"posix88","libc::types::os::arch",""],[6,"off_t","libc::types::os::arch::posix88",""],[6,"dev_t","",""],[6,"ino_t","",""],[6,"pid_t","",""],[6,"uid_t","",""],[6,"gid_t","",""],[6,"useconds_t","",""],[6,"mode_t","",""],[6,"ssize_t","",""],[0,"posix01","libc::types::os::arch",""],[3,"stat","libc::types::os::arch::posix01",""],[12,"st_dev","","",15],[12,"st_ino","","",15],[12,"st_nlink","","",15],[12,"st_mode","","",15],[12,"st_uid","","",15],[12,"st_gid","","",15],[12,"__pad0","","",15],[12,"st_rdev","","",15],[12,"st_size","","",15],[12,"st_blksize","","",15],[12,"st_blocks","","",15],[12,"st_atime","","",15],[12,"st_atime_nsec","","",15],[12,"st_mtime","","",15],[12,"st_mtime_nsec","","",15],[12,"st_ctime","","",15],[12,"st_ctime_nsec","","",15],[12,"__unused","","",15],[3,"utimbuf","",""],[12,"actime","","",16],[12,"modtime","","",16],[3,"pthread_attr_t","",""],[12,"__size","","",17],[6,"nlink_t","",""],[6,"blksize_t","",""],[6,"blkcnt_t","",""],[0,"extra","libc::types::os::arch",""],[3,"sockaddr_ll","libc::types::os::arch::extra",""],[12,"sll_family","","",18],[12,"sll_protocol","","",18],[12,"sll_ifindex","","",18],[12,"sll_hatype","","",18],[12,"sll_pkttype","","",18],[12,"sll_halen","","",18],[12,"sll_addr","","",18],[0,"consts","libc",""],[0,"os","libc::consts",""],[0,"c95","libc::consts::os",""],[17,"EXIT_FAILURE","libc::consts::os::c95",""],[17,"EXIT_SUCCESS","",""],[17,"RAND_MAX","",""],[17,"EOF","",""],[17,"SEEK_SET","",""],[17,"SEEK_CUR","",""],[17,"SEEK_END","",""],[17,"_IOFBF","",""],[17,"_IONBF","",""],[17,"_IOLBF","",""],[17,"BUFSIZ","",""],[17,"FOPEN_MAX","",""],[17,"FILENAME_MAX","",""],[17,"L_tmpnam","",""],[17,"TMP_MAX","",""],[0,"posix88","libc::consts::os",""],[17,"O_RDONLY","libc::consts::os::posix88",""],[17,"O_WRONLY","",""],[17,"O_RDWR","",""],[17,"O_APPEND","",""],[17,"O_CREAT","",""],[17,"O_EXCL","",""],[17,"O_TRUNC","",""],[17,"S_IFIFO","",""],[17,"S_IFCHR","",""],[17,"S_IFBLK","",""],[17,"S_IFDIR","",""],[17,"S_IFREG","",""],[17,"S_IFLNK","",""],[17,"S_IFMT","",""],[17,"S_IEXEC","",""],[17,"S_IWRITE","",""],[17,"S_IREAD","",""],[17,"S_IRWXU","",""],[17,"S_IXUSR","",""],[17,"S_IWUSR","",""],[17,"S_IRUSR","",""],[17,"F_OK","",""],[17,"R_OK","",""],[17,"W_OK","",""],[17,"X_OK","",""],[17,"STDIN_FILENO","",""],[17,"STDOUT_FILENO","",""],[17,"STDERR_FILENO","",""],[17,"F_LOCK","",""],[17,"F_TEST","",""],[17,"F_TLOCK","",""],[17,"F_ULOCK","",""],[17,"SIGHUP","",""],[17,"SIGINT","",""],[17,"SIGQUIT","",""],[17,"SIGILL","",""],[17,"SIGABRT","",""],[17,"SIGFPE","",""],[17,"SIGKILL","",""],[17,"SIGSEGV","",""],[17,"SIGPIPE","",""],[17,"SIGALRM","",""],[17,"SIGTERM","",""],[17,"PROT_NONE","",""],[17,"PROT_READ","",""],[17,"PROT_WRITE","",""],[17,"PROT_EXEC","",""],[17,"MAP_FILE","",""],[17,"MAP_SHARED","",""],[17,"MAP_PRIVATE","",""],[17,"MAP_FIXED","",""],[17,"MAP_ANON","",""],[17,"MAP_FAILED","",""],[17,"MCL_CURRENT","",""],[17,"MCL_FUTURE","",""],[17,"MS_ASYNC","",""],[17,"MS_INVALIDATE","",""],[17,"MS_SYNC","",""],[17,"EPERM","",""],[17,"ENOENT","",""],[17,"ESRCH","",""],[17,"EINTR","",""],[17,"EIO","",""],[17,"ENXIO","",""],[17,"E2BIG","",""],[17,"ENOEXEC","",""],[17,"EBADF","",""],[17,"ECHILD","",""],[17,"EAGAIN","",""],[17,"ENOMEM","",""],[17,"EACCES","",""],[17,"EFAULT","",""],[17,"ENOTBLK","",""],[17,"EBUSY","",""],[17,"EEXIST","",""],[17,"EXDEV","",""],[17,"ENODEV","",""],[17,"ENOTDIR","",""],[17,"EISDIR","",""],[17,"EINVAL","",""],[17,"ENFILE","",""],[17,"EMFILE","",""],[17,"ENOTTY","",""],[17,"ETXTBSY","",""],[17,"EFBIG","",""],[17,"ENOSPC","",""],[17,"ESPIPE","",""],[17,"EROFS","",""],[17,"EMLINK","",""],[17,"EPIPE","",""],[17,"EDOM","",""],[17,"ERANGE","",""],[17,"EDEADLK","",""],[17,"ENAMETOOLONG","",""],[17,"ENOLCK","",""],[17,"ENOSYS","",""],[17,"ENOTEMPTY","",""],[17,"ELOOP","",""],[17,"EWOULDBLOCK","",""],[17,"ENOMSG","",""],[17,"EIDRM","",""],[17,"ECHRNG","",""],[17,"EL2NSYNC","",""],[17,"EL3HLT","",""],[17,"EL3RST","",""],[17,"ELNRNG","",""],[17,"EUNATCH","",""],[17,"ENOCSI","",""],[17,"EL2HLT","",""],[17,"EBADE","",""],[17,"EBADR","",""],[17,"EXFULL","",""],[17,"ENOANO","",""],[17,"EBADRQC","",""],[17,"EBADSLT","",""],[17,"EDEADLOCK","",""],[17,"EBFONT","",""],[17,"ENOSTR","",""],[17,"ENODATA","",""],[17,"ETIME","",""],[17,"ENOSR","",""],[17,"ENONET","",""],[17,"ENOPKG","",""],[17,"EREMOTE","",""],[17,"ENOLINK","",""],[17,"EADV","",""],[17,"ESRMNT","",""],[17,"ECOMM","",""],[17,"EPROTO","",""],[17,"EMULTIHOP","",""],[17,"EDOTDOT","",""],[17,"EBADMSG","",""],[17,"EOVERFLOW","",""],[17,"ENOTUNIQ","",""],[17,"EBADFD","",""],[17,"EREMCHG","",""],[17,"ELIBACC","",""],[17,"ELIBBAD","",""],[17,"ELIBSCN","",""],[17,"ELIBMAX","",""],[17,"ELIBEXEC","",""],[17,"EILSEQ","",""],[17,"ERESTART","",""],[17,"ESTRPIPE","",""],[17,"EUSERS","",""],[17,"ENOTSOCK","",""],[17,"EDESTADDRREQ","",""],[17,"EMSGSIZE","",""],[17,"EPROTOTYPE","",""],[17,"ENOPROTOOPT","",""],[17,"EPROTONOSUPPORT","",""],[17,"ESOCKTNOSUPPORT","",""],[17,"EOPNOTSUPP","",""],[17,"EPFNOSUPPORT","",""],[17,"EAFNOSUPPORT","",""],[17,"EADDRINUSE","",""],[17,"EADDRNOTAVAIL","",""],[17,"ENETDOWN","",""],[17,"ENETUNREACH","",""],[17,"ENETRESET","",""],[17,"ECONNABORTED","",""],[17,"ECONNRESET","",""],[17,"ENOBUFS","",""],[17,"EISCONN","",""],[17,"ENOTCONN","",""],[17,"ESHUTDOWN","",""],[17,"ETOOMANYREFS","",""],[17,"ETIMEDOUT","",""],[17,"ECONNREFUSED","",""],[17,"EHOSTDOWN","",""],[17,"EHOSTUNREACH","",""],[17,"EALREADY","",""],[17,"EINPROGRESS","",""],[17,"ESTALE","",""],[17,"EUCLEAN","",""],[17,"ENOTNAM","",""],[17,"ENAVAIL","",""],[17,"EISNAM","",""],[17,"EREMOTEIO","",""],[17,"EDQUOT","",""],[17,"ENOMEDIUM","",""],[17,"EMEDIUMTYPE","",""],[17,"ECANCELED","",""],[17,"ENOKEY","",""],[17,"EKEYEXPIRED","",""],[17,"EKEYREVOKED","",""],[17,"EKEYREJECTED","",""],[17,"EOWNERDEAD","",""],[17,"ENOTRECOVERABLE","",""],[17,"ERFKILL","",""],[17,"EHWPOISON","",""],[0,"posix01","libc::consts::os",""],[17,"F_DUPFD","libc::consts::os::posix01",""],[17,"F_GETFD","",""],[17,"F_SETFD","",""],[17,"F_GETFL","",""],[17,"F_SETFL","",""],[17,"SIGTRAP","",""],[17,"SIGPIPE","",""],[17,"SIG_IGN","",""],[17,"GLOB_ERR","",""],[17,"GLOB_MARK","",""],[17,"GLOB_NOSORT","",""],[17,"GLOB_DOOFFS","",""],[17,"GLOB_NOCHECK","",""],[17,"GLOB_APPEND","",""],[17,"GLOB_NOESCAPE","",""],[17,"GLOB_NOSPACE","",""],[17,"GLOB_ABORTED","",""],[17,"GLOB_NOMATCH","",""],[17,"POSIX_MADV_NORMAL","",""],[17,"POSIX_MADV_RANDOM","",""],[17,"POSIX_MADV_SEQUENTIAL","",""],[17,"POSIX_MADV_WILLNEED","",""],[17,"POSIX_MADV_DONTNEED","",""],[17,"_SC_MQ_PRIO_MAX","",""],[17,"_SC_IOV_MAX","",""],[17,"_SC_GETGR_R_SIZE_MAX","",""],[17,"_SC_GETPW_R_SIZE_MAX","",""],[17,"_SC_LOGIN_NAME_MAX","",""],[17,"_SC_TTY_NAME_MAX","",""],[17,"_SC_THREADS","",""],[17,"_SC_THREAD_SAFE_FUNCTIONS","",""],[17,"_SC_THREAD_DESTRUCTOR_ITERATIONS","",""],[17,"_SC_THREAD_KEYS_MAX","",""],[17,"_SC_THREAD_STACK_MIN","",""],[17,"_SC_THREAD_THREADS_MAX","",""],[17,"_SC_THREAD_ATTR_STACKADDR","",""],[17,"_SC_THREAD_ATTR_STACKSIZE","",""],[17,"_SC_THREAD_PRIORITY_SCHEDULING","",""],[17,"_SC_THREAD_PRIO_INHERIT","",""],[17,"_SC_THREAD_PRIO_PROTECT","",""],[17,"_SC_THREAD_PROCESS_SHARED","",""],[17,"_SC_ATEXIT_MAX","",""],[17,"_SC_XOPEN_VERSION","",""],[17,"_SC_XOPEN_XCU_VERSION","",""],[17,"_SC_XOPEN_UNIX","",""],[17,"_SC_XOPEN_CRYPT","",""],[17,"_SC_XOPEN_ENH_I18N","",""],[17,"_SC_XOPEN_SHM","",""],[17,"_SC_XOPEN_LEGACY","",""],[17,"_SC_XOPEN_REALTIME","",""],[17,"_SC_XOPEN_REALTIME_THREADS","",""],[17,"PTHREAD_CREATE_JOINABLE","",""],[17,"PTHREAD_CREATE_DETACHED","",""],[17,"PTHREAD_STACK_MIN","",""],[17,"CLOCK_REALTIME","",""],[17,"CLOCK_MONOTONIC","",""],[0,"bsd44","libc::consts::os",""],[17,"MADV_NORMAL","libc::consts::os::bsd44",""],[17,"MADV_RANDOM","",""],[17,"MADV_SEQUENTIAL","",""],[17,"MADV_WILLNEED","",""],[17,"MADV_DONTNEED","",""],[17,"MADV_REMOVE","",""],[17,"MADV_DONTFORK","",""],[17,"MADV_DOFORK","",""],[17,"MADV_MERGEABLE","",""],[17,"MADV_UNMERGEABLE","",""],[17,"MADV_HWPOISON","",""],[17,"IFF_LOOPBACK","",""],[17,"AF_UNIX","",""],[17,"AF_INET","",""],[17,"AF_INET6","",""],[17,"SOCK_STREAM","",""],[17,"SOCK_DGRAM","",""],[17,"SOCK_RAW","",""],[17,"IPPROTO_TCP","",""],[17,"IPPROTO_IP","",""],[17,"IPPROTO_IPV6","",""],[17,"IP_MULTICAST_TTL","",""],[17,"IP_MULTICAST_LOOP","",""],[17,"IP_TTL","",""],[17,"IP_HDRINCL","",""],[17,"IP_ADD_MEMBERSHIP","",""],[17,"IP_DROP_MEMBERSHIP","",""],[17,"IPV6_ADD_MEMBERSHIP","",""],[17,"IPV6_DROP_MEMBERSHIP","",""],[17,"TCP_NODELAY","",""],[17,"SOL_SOCKET","",""],[17,"SO_KEEPALIVE","",""],[17,"SO_BROADCAST","",""],[17,"SO_REUSEADDR","",""],[17,"SO_ERROR","",""],[17,"SHUT_RD","",""],[17,"SHUT_WR","",""],[17,"SHUT_RDWR","",""],[0,"extra","libc::consts::os",""],[17,"AF_PACKET","libc::consts::os::extra",""],[17,"IPPROTO_RAW","",""],[17,"O_RSYNC","",""],[17,"O_DSYNC","",""],[17,"O_NONBLOCK","",""],[17,"O_SYNC","",""],[17,"PROT_GROWSDOWN","",""],[17,"PROT_GROWSUP","",""],[17,"MAP_TYPE","",""],[17,"MAP_ANONYMOUS","",""],[17,"MAP_32BIT","",""],[17,"MAP_GROWSDOWN","",""],[17,"MAP_DENYWRITE","",""],[17,"MAP_EXECUTABLE","",""],[17,"MAP_LOCKED","",""],[17,"MAP_NONRESERVE","",""],[17,"MAP_POPULATE","",""],[17,"MAP_NONBLOCK","",""],[17,"MAP_STACK","",""],[0,"sysconf","libc::consts::os",""],[17,"_SC_ARG_MAX","libc::consts::os::sysconf",""],[17,"_SC_CHILD_MAX","",""],[17,"_SC_CLK_TCK","",""],[17,"_SC_NGROUPS_MAX","",""],[17,"_SC_OPEN_MAX","",""],[17,"_SC_STREAM_MAX","",""],[17,"_SC_TZNAME_MAX","",""],[17,"_SC_JOB_CONTROL","",""],[17,"_SC_SAVED_IDS","",""],[17,"_SC_REALTIME_SIGNALS","",""],[17,"_SC_PRIORITY_SCHEDULING","",""],[17,"_SC_TIMERS","",""],[17,"_SC_ASYNCHRONOUS_IO","",""],[17,"_SC_PRIORITIZED_IO","",""],[17,"_SC_SYNCHRONIZED_IO","",""],[17,"_SC_FSYNC","",""],[17,"_SC_MAPPED_FILES","",""],[17,"_SC_MEMLOCK","",""],[17,"_SC_MEMLOCK_RANGE","",""],[17,"_SC_MEMORY_PROTECTION","",""],[17,"_SC_MESSAGE_PASSING","",""],[17,"_SC_SEMAPHORES","",""],[17,"_SC_SHARED_MEMORY_OBJECTS","",""],[17,"_SC_AIO_LISTIO_MAX","",""],[17,"_SC_AIO_MAX","",""],[17,"_SC_AIO_PRIO_DELTA_MAX","",""],[17,"_SC_DELAYTIMER_MAX","",""],[17,"_SC_MQ_OPEN_MAX","",""],[17,"_SC_VERSION","",""],[17,"_SC_PAGESIZE","",""],[17,"_SC_RTSIG_MAX","",""],[17,"_SC_SEM_NSEMS_MAX","",""],[17,"_SC_SEM_VALUE_MAX","",""],[17,"_SC_SIGQUEUE_MAX","",""],[17,"_SC_TIMER_MAX","",""],[17,"_SC_BC_BASE_MAX","",""],[17,"_SC_BC_DIM_MAX","",""],[17,"_SC_BC_SCALE_MAX","",""],[17,"_SC_BC_STRING_MAX","",""],[17,"_SC_COLL_WEIGHTS_MAX","",""],[17,"_SC_EXPR_NEST_MAX","",""],[17,"_SC_LINE_MAX","",""],[17,"_SC_RE_DUP_MAX","",""],[17,"_SC_2_VERSION","",""],[17,"_SC_2_C_BIND","",""],[17,"_SC_2_C_DEV","",""],[17,"_SC_2_FORT_DEV","",""],[17,"_SC_2_FORT_RUN","",""],[17,"_SC_2_SW_DEV","",""],[17,"_SC_2_LOCALEDEF","",""],[17,"_SC_2_CHAR_TERM","",""],[17,"_SC_2_C_VERSION","",""],[17,"_SC_2_UPE","",""],[17,"_SC_XBS5_ILP32_OFF32","",""],[17,"_SC_XBS5_ILP32_OFFBIG","",""],[17,"_SC_XBS5_LPBIG_OFFBIG","",""],[0,"funcs","libc",""],[0,"c95","libc::funcs",""],[0,"ctype","libc::funcs::c95",""],[5,"isalnum","libc::funcs::c95::ctype",""],[5,"isalpha","",""],[5,"iscntrl","",""],[5,"isdigit","",""],[5,"isgraph","",""],[5,"islower","",""],[5,"isprint","",""],[5,"ispunct","",""],[5,"isspace","",""],[5,"isupper","",""],[5,"isxdigit","",""],[5,"tolower","",""],[5,"toupper","",""],[0,"stdio","libc::funcs::c95",""],[5,"fopen","libc::funcs::c95::stdio",""],[5,"freopen","",""],[5,"fflush","",""],[5,"fclose","",""],[5,"remove","",""],[5,"rename","",""],[5,"tmpfile","",""],[5,"setvbuf","",""],[5,"setbuf","",""],[5,"fgetc","",""],[5,"fgets","",""],[5,"fputc","",""],[5,"fputs","",""],[5,"puts","",""],[5,"ungetc","",""],[5,"fread","",""],[5,"fwrite","",""],[5,"fseek","",""],[5,"ftell","",""],[5,"rewind","",""],[5,"fgetpos","",""],[5,"fsetpos","",""],[5,"feof","",""],[5,"ferror","",""],[5,"perror","",""],[0,"stdlib","libc::funcs::c95",""],[5,"abs","libc::funcs::c95::stdlib",""],[5,"labs","",""],[5,"atof","",""],[5,"atoi","",""],[5,"strtod","",""],[5,"strtol","",""],[5,"strtoul","",""],[5,"calloc","",""],[5,"malloc","",""],[5,"realloc","",""],[5,"free","",""],[5,"exit","","Exits the running program in a possibly dangerous manner."],[5,"_exit","",""],[5,"atexit","",""],[5,"system","",""],[5,"getenv","",""],[5,"rand","",""],[5,"srand","",""],[0,"string","libc::funcs::c95",""],[5,"strcpy","libc::funcs::c95::string",""],[5,"strncpy","",""],[5,"strcat","",""],[5,"strncat","",""],[5,"strcmp","",""],[5,"strncmp","",""],[5,"strcoll","",""],[5,"strchr","",""],[5,"strrchr","",""],[5,"strspn","",""],[5,"strcspn","",""],[5,"strpbrk","",""],[5,"strstr","",""],[5,"strlen","",""],[5,"strerror","",""],[5,"strtok","",""],[5,"strxfrm","",""],[5,"wcslen","",""],[5,"memcmp","",""],[5,"memchr","",""],[0,"posix88","libc::funcs",""],[0,"stat_","libc::funcs::posix88",""],[5,"chmod","libc::funcs::posix88::stat_",""],[5,"fchmod","",""],[5,"fstat","",""],[5,"mkdir","",""],[5,"mkfifo","",""],[5,"stat","",""],[0,"stdio","libc::funcs::posix88",""],[5,"popen","libc::funcs::posix88::stdio",""],[5,"pclose","",""],[5,"fdopen","",""],[5,"fileno","",""],[0,"fcntl","libc::funcs::posix88",""],[5,"open","libc::funcs::posix88::fcntl",""],[5,"creat","",""],[5,"fcntl","",""],[0,"dirent","libc::funcs::posix88",""],[5,"opendir","libc::funcs::posix88::dirent",""],[5,"readdir_r","",""],[5,"closedir","",""],[5,"rewinddir","",""],[5,"seekdir","",""],[5,"telldir","",""],[0,"unistd","libc::funcs::posix88",""],[5,"access","libc::funcs::posix88::unistd",""],[5,"alarm","",""],[5,"chdir","",""],[5,"chown","",""],[5,"close","",""],[5,"dup","",""],[5,"dup2","",""],[5,"execv","",""],[5,"execve","",""],[5,"execvp","",""],[5,"fork","",""],[5,"fpathconf","",""],[5,"getcwd","",""],[5,"getegid","",""],[5,"geteuid","",""],[5,"getgid","",""],[5,"getgroups","",""],[5,"getlogin","",""],[5,"getopt","",""],[5,"getpgrp","",""],[5,"getpid","",""],[5,"getppid","",""],[5,"getuid","",""],[5,"getsid","",""],[5,"isatty","",""],[5,"link","",""],[5,"lseek","",""],[5,"pathconf","",""],[5,"pause","",""],[5,"pipe","",""],[5,"read","",""],[5,"rmdir","",""],[5,"setgid","",""],[5,"setpgid","",""],[5,"setsid","",""],[5,"setuid","",""],[5,"sleep","",""],[5,"usleep","",""],[5,"nanosleep","",""],[5,"sysconf","",""],[5,"tcgetpgrp","",""],[5,"ttyname","",""],[5,"unlink","",""],[5,"write","",""],[5,"pread","",""],[5,"pwrite","",""],[5,"utime","",""],[17,"_PC_NAME_MAX","",""],[0,"signal","libc::funcs::posix88",""],[5,"kill","libc::funcs::posix88::signal",""],[0,"mman","libc::funcs::posix88",""],[5,"mlock","libc::funcs::posix88::mman",""],[5,"munlock","",""],[5,"mlockall","",""],[5,"munlockall","",""],[5,"mmap","",""],[5,"munmap","",""],[5,"mprotect","",""],[5,"msync","",""],[5,"shm_open","",""],[5,"shm_unlink","",""],[0,"net","libc::funcs::posix88",""],[5,"if_nametoindex","libc::funcs::posix88::net",""],[0,"posix01","libc::funcs",""],[0,"stat_","libc::funcs::posix01",""],[5,"lstat","libc::funcs::posix01::stat_",""],[0,"unistd","libc::funcs::posix01",""],[5,"readlink","libc::funcs::posix01::unistd",""],[5,"fsync","",""],[5,"fdatasync","",""],[5,"setenv","",""],[5,"unsetenv","",""],[5,"putenv","",""],[5,"symlink","",""],[5,"ftruncate","",""],[0,"signal","libc::funcs::posix01",""],[5,"signal","libc::funcs::posix01::signal",""],[0,"glob","libc::funcs::posix01",""],[5,"glob","libc::funcs::posix01::glob",""],[5,"globfree","",""],[0,"mman","libc::funcs::posix01",""],[5,"posix_madvise","libc::funcs::posix01::mman",""],[0,"bsd43","libc::funcs",""],[5,"socket","libc::funcs::bsd43",""],[5,"connect","",""],[5,"bind","",""],[5,"listen","",""],[5,"accept","",""],[5,"getpeername","",""],[5,"getsockname","",""],[5,"setsockopt","",""],[5,"recv","",""],[5,"send","",""],[5,"recvfrom","",""],[5,"sendto","",""],[5,"getifaddrs","",""],[5,"freeifaddrs","",""],[5,"shutdown","",""],[0,"bsd44","libc::funcs",""],[5,"getdtablesize","libc::funcs::bsd44",""],[5,"ioctl","",""],[5,"madvise","",""],[5,"mincore","",""]],"paths":[[4,"c_void"],[3,"glob_t"],[3,"timeval"],[3,"timespec"],[3,"sockaddr"],[3,"sockaddr_storage"],[3,"sockaddr_in"],[3,"in_addr"],[3,"sockaddr_in6"],[3,"in6_addr"],[3,"ip_mreq"],[3,"ip6_mreq"],[3,"addrinfo"],[3,"sockaddr_un"],[3,"ifaddrs"],[3,"stat"],[3,"utimbuf"],[3,"pthread_attr_t"],[3,"sockaddr_ll"]]};

initSearch(searchIndex);
