BASIC = [
		    {
		        "Address": "A000",
		        "Description": "start of the BASIC ROM"
		    },
		    {
		        "Address": "A00C",
		        "Description": "action addresses for primary commands"
		    },
		    {
		        "Address": "A052",
		        "Description": "action addresses for functions"
		    },
		    {
		        "Address": "A080",
		        "Description": "precedence byte and action addresses for operators"
		    },
		    {
		        "Address": "A09E",
		        "Description": "BASIC keywords"
		    },
		    {
		        "Address": "A19E",
		        "Description": "BASIC error messages"
		    },
		    {
		        "Address": "A328",
		        "Description": "error message pointer table"
		    },
		    {
		        "Address": "A364",
		        "Description": "BASIC messages"
		    },
		    {
		        "Address": "A389",
		        "Description": "spare byte, not referenced"
		    },
		    {
		        "Address": "A38A",
		        "Description": "search the stack for FOR or GOSUB activity"
		    },
		    {
		        "Address": "A3B8",
		        "Description": "open up a space in the memory, set the end of arrays"
		    },
		    {
		        "Address": "A3FB",
		        "Description": "check room on stack for A bytes"
		    },
		    {
		        "Address": "A408",
		        "Description": "check available memory, do out of memory error if no room"
		    },
		    {
		        "Address": "A435",
		        "Description": "do out of memory error then warm start"
		    },
		    {
		        "Address": "A43A",
		        "Description": "do error #X then warm start"
		    },
		    {
		        "Address": "A469",
		        "Description": "print string and do warm start, break entry"
		    },
		    {
		        "Address": "A474",
		        "Description": "do warm start"
		    },
		    {
		        "Address": "A483",
		        "Description": "BASIC warm start"
		    },
		    {
		        "Address": "A49C",
		        "Description": "handle new BASIC line"
		    },
		    {
		        "Address": "A533",
		        "Description": "rebuild BASIC line chaining"
		    },
		    {
		        "Address": "A560",
		        "Description": "call for BASIC input"
		    },
		    {
		        "Address": "A579",
		        "Description": "crunch BASIC tokens vector"
		    },
		    {
		        "Address": "A57C",
		        "Description": "crunch BASIC tokens"
		    },
		    {
		        "Address": "A613",
		        "Description": "search BASIC for temporary integer line number"
		    },
		    {
		        "Address": "A617",
		        "Description": "search Basic for temp integer line number from AX"
		    },
		    {
		        "Address": "A642",
		        "Description": "perform NEW"
		    },
		    {
		        "Address": "A659",
		        "Description": "reset execute pointer and do CLR"
		    },
		    {
		        "Address": "A65E",
		        "Description": "perform CLR"
		    },
		    {
		        "Address": "A677",
		        "Description": "do RESTORE and clear stack"
		    },
		    {
		        "Address": "A67A",
		        "Description": "flush BASIC stack and clear the continue pointer"
		    },
		    {
		        "Address": "A68E",
		        "Description": "set BASIC execute pointer to start of memory - 1"
		    },
		    {
		        "Address": "A69C",
		        "Description": "perform LIST"
		    },
		    {
		        "Address": "A71A",
		        "Description": "uncrunch BASIC tokens"
		    },
		    {
		        "Address": "A742",
		        "Description": "perform FOR"
		    },
		    {
		        "Address": "A7AE",
		        "Description": "interpreter inner loop"
		    },
		    {
		        "Address": "A81D",
		        "Description": "perform RESTORE"
		    },
		    {
		        "Address": "A82C",
		        "Description": "do CRTL-C check vector"
		    },
		    {
		        "Address": "A82F",
		        "Description": "perform STOP"
		    },
		    {
		        "Address": "A831",
		        "Description": "perform END"
		    },
		    {
		        "Address": "A857",
		        "Description": "perform CONT"
		    },
		    {
		        "Address": "A871",
		        "Description": "perform RUN"
		    },
		    {
		        "Address": "A883",
		        "Description": "perform GOSUB"
		    },
		    {
		        "Address": "A8A0",
		        "Description": "perform GOTO"
		    },
		    {
		        "Address": "A8BC",
		        "Description": "search for line number in temporary integer from start of memory pointer"
		    },
		    {
		        "Address": "A8C0",
		        "Description": "search for line # in temporary integer from (AX)"
		    },
		    {
		        "Address": "A8D2",
		        "Description": "perform RETURN"
		    },
		    {
		        "Address": "A8E8",
		        "Description": "do syntax error then warm start"
		    },
		    {
		        "Address": "A8EB",
		        "Description": "perform RETURN (continued)"
		    },
		    {
		        "Address": "A8F8",
		        "Description": "perform DATA"
		    },
		    {
		        "Address": "A8FB",
		        "Description": "add Y to the BASIC execute pointer"
		    },
		    {
		        "Address": "A906",
		        "Description": "scan for next BASIC statement ([:] or [EOL])"
		    },
		    {
		        "Address": "A909",
		        "Description": "scan for next BASIC line"
		    },
		    {
		        "Address": "A928",
		        "Description": "perform IF"
		    },
		    {
		        "Address": "A93B",
		        "Description": "perform REM"
		    },
		    {
		        "Address": "A94B",
		        "Description": "perform ON"
		    },
		    {
		        "Address": "A96B",
		        "Description": "get fixed-point number into temporary integer"
		    },
		    {
		        "Address": "A9A5",
		        "Description": "perform LET"
		    },
		    {
		        "Address": "AA1D",
		        "Description": "check and evaluate numeric digit"
		    },
		    {
		        "Address": "AA2C",
		        "Description": "assign value to numeric variable, but not TI$"
		    },
		    {
		        "Address": "AA80",
		        "Description": "perform PRINT#"
		    },
		    {
		        "Address": "AA86",
		        "Description": "perform CMD"
		    },
		    {
		        "Address": "AA9A",
		        "Description": "print string and scan memory"
		    },
		    {
		        "Address": "AAA0",
		        "Description": "perform PRINT"
		    },
		    {
		        "Address": "AACA",
		        "Description": "set XY to $0200 - 1 and print [CR]"
		    },
		    {
		        "Address": "AAD7",
		        "Description": "print CR/LF"
		    },
		    {
		        "Address": "AAE8",
		        "Description": "skip to the next TAB position"
		    },
		    {
		        "Address": "AB1E",
		        "Description": "print null terminated string"
		    },
		    {
		        "Address": "AB21",
		        "Description": "print string from utility pointer"
		    },
		    {
		        "Address": "AB3B",
		        "Description": "print [SPACE] or [CURSOR RIGHT]"
		    },
		    {
		        "Address": "AB45",
		        "Description": "print \"?\""
		    },
		    {
		        "Address": "AB47",
		        "Description": "print character"
		    },
		    {
		        "Address": "AB4D",
		        "Description": "bad input routine"
		    },
		    {
		        "Address": "AB7B",
		        "Description": "perform GET"
		    },
		    {
		        "Address": "ABA5",
		        "Description": "perform INPUT#"
		    },
		    {
		        "Address": "ABB5",
		        "Description": "close input and output channels"
		    },
		    {
		        "Address": "ABBF",
		        "Description": "perform INPUT"
		    },
		    {
		        "Address": "ABF9",
		        "Description": "print \"? \" and get BASIC input"
		    },
		    {
		        "Address": "AC06",
		        "Description": "perform READ"
		    },
		    {
		        "Address": "AC0F",
		        "Description": "perform GET"
		    },
		    {
		        "Address": "ACFC",
		        "Description": "input error messages"
		    },
		    {
		        "Address": "AD1E",
		        "Description": "perform NEXT"
		    },
		    {
		        "Address": "AD8A",
		        "Description": "evaluate expression and check type mismatch"
		    },
		    {
		        "Address": "AD9E",
		        "Description": "evaluate expression"
		    },
		    {
		        "Address": "AE20",
		        "Description": "get vector, execute function then continue evaluation"
		    },
		    {
		        "Address": "AE30",
		        "Description": "do syntax error then warm start"
		    },
		    {
		        "Address": "AE33",
		        "Description": "get vector, execute function then continue evaluation (continued)"
		    },
		    {
		        "Address": "AE38",
		        "Description": "push sign, round FAC1 and put on stack"
		    },
		    {
		        "Address": "AE43",
		        "Description": "round FAC1 and put on stack"
		    },
		    {
		        "Address": "AE58",
		        "Description": "do functions"
		    },
		    {
		        "Address": "AE83",
		        "Description": "get value from line"
		    },
		    {
		        "Address": "AE86",
		        "Description": "get arithmetic element"
		    },
		    {
		        "Address": "AF14",
		        "Description": "check address range"
		    },
		    {
		        "Address": "AF28",
		        "Description": "variable name set-up"
		    },
		    {
		        "Address": "AFA7",
		        "Description": "get value from line continued"
		    },
		    {
		        "Address": "AFE6",
		        "Description": "perform OR"
		    },
		    {
		        "Address": "AFE9",
		        "Description": "perform AND"
		    },
		    {
		        "Address": "B016",
		        "Description": "perform comparisons"
		    },
		    {
		        "Address": "B07E",
		        "Description": "perform DIM"
		    },
		    {
		        "Address": "B08B",
		        "Description": "search for variable"
		    },
		    {
		        "Address": "B194",
		        "Description": "set-up array pointer to first element in array"
		    },
		    {
		        "Address": "B1A5",
		        "Description": "-32768 as floating value"
		    },
		    {
		        "Address": "B1AA",
		        "Description": "convert float to fixed"
		    },
		    {
		        "Address": "B1B2",
		        "Description": "evaluate integer expression"
		    },
		    {
		        "Address": "B1D1",
		        "Description": "find or make array"
		    },
		    {
		        "Address": "B37D",
		        "Description": "perform FRE()"
		    },
		    {
		        "Address": "B391",
		        "Description": "convert fixed integer AY to float FAC1"
		    },
		    {
		        "Address": "B39E",
		        "Description": "perform POS()"
		    },
		    {
		        "Address": "B3B3",
		        "Description": "perform DEF"
		    },
		    {
		        "Address": "B3E1",
		        "Description": "check FNx syntax"
		    },
		    {
		        "Address": "B3F4",
		        "Description": "Evaluate FNx"
		    },
		    {
		        "Address": "B449",
		        "Description": "restore BASIC execute pointer and function variable from stack"
		    },
		    {
		        "Address": "B465",
		        "Description": "perform STR$()"
		    },
		    {
		        "Address": "B475",
		        "Description": "do string vector"
		    },
		    {
		        "Address": "B47D",
		        "Description": "make string space A bytes long"
		    },
		    {
		        "Address": "B487",
		        "Description": "scan, set up string"
		    },
		    {
		        "Address": "B4F4",
		        "Description": "make space in string memory for string A long"
		    },
		    {
		        "Address": "B526",
		        "Description": "garbage collection routine"
		    },
		    {
		        "Address": "B63D",
		        "Description": "concatenate"
		    },
		    {
		        "Address": "B67A",
		        "Description": "copy string from descriptor to utility pointer"
		    },
		    {
		        "Address": "B6A3",
		        "Description": "evaluate string"
		    },
		    {
		        "Address": "B6DB",
		        "Description": "clean descriptor stack"
		    },
		    {
		        "Address": "B6EC",
		        "Description": "perform CHR$()"
		    },
		    {
		        "Address": "B700",
		        "Description": "perform LEFT$()"
		    },
		    {
		        "Address": "B72C",
		        "Description": "perform RIGHT$()"
		    },
		    {
		        "Address": "B737",
		        "Description": "perform MID$()"
		    },
		    {
		        "Address": "B761",
		        "Description": "pull string data and byte parameter from stack"
		    },
		    {
		        "Address": "B77C",
		        "Description": "perform LEN()"
		    },
		    {
		        "Address": "B782",
		        "Description": "evaluate string, get length in Y"
		    },
		    {
		        "Address": "B78B",
		        "Description": "perform ASC()"
		    },
		    {
		        "Address": "B798",
		        "Description": "do illegal quantity error then warm start"
		    },
		    {
		        "Address": "B79B",
		        "Description": "scan and get byte parameter"
		    },
		    {
		        "Address": "B79E",
		        "Description": "get byte parameter"
		    },
		    {
		        "Address": "B7A1",
		        "Description": "evaluate byte expression, result in X"
		    },
		    {
		        "Address": "B7AD",
		        "Description": "perform VAL()"
		    },
		    {
		        "Address": "B7E2",
		        "Description": "restore BASIC execute pointer from temp"
		    },
		    {
		        "Address": "B7EB",
		        "Description": "get parameters for POKE/WAIT"
		    },
		    {
		        "Address": "B7F7",
		        "Description": "convert FAC_1 to integer in temporary integer"
		    },
		    {
		        "Address": "B80D",
		        "Description": "perform PEEK()"
		    },
		    {
		        "Address": "B824",
		        "Description": "perform POKE"
		    },
		    {
		        "Address": "B82D",
		        "Description": "perform WAIT"
		    },
		    {
		        "Address": "B849",
		        "Description": "add 0.5 to FAC1 (round FAC1)"
		    },
		    {
		        "Address": "B850",
		        "Description": "perform subtraction, FAC1 from (AY)"
		    },
		    {
		        "Address": "B853",
		        "Description": "perform subtraction, FAC1 from FAC2"
		    },
		    {
		        "Address": "B862",
		        "Description": "shift FACX A times right"
		    },
		    {
		        "Address": "B86A",
		        "Description": "add FAC2 to FAC1"
		    },
		    {
		        "Address": "B8D2",
		        "Description": "do ABS and normalise FAC1"
		    },
		    {
		        "Address": "B8D7",
		        "Description": "normalise FAC1"
		    },
		    {
		        "Address": "B8F7",
		        "Description": "clear FAC1 exponent and sign"
		    },
		    {
		        "Address": "B8FB",
		        "Description": "save FAC1 sign"
		    },
		    {
		        "Address": "B8FE",
		        "Description": "add FAC2 mantissa to FAC1 mantissa"
		    },
		    {
		        "Address": "B947",
		        "Description": "negate FAC1"
		    },
		    {
		        "Address": "B97E",
		        "Description": "do overflow error then warm start"
		    },
		    {
		        "Address": "B983",
		        "Description": "shift FCAtemp &lt;&lt; A+8 times"
		    },
		    {
		        "Address": "B9BC",
		        "Description": "constants and series for LOG(n)"
		    },
		    {
		        "Address": "B9EA",
		        "Description": "perform LOG()"
		    },
		    {
		        "Address": "BA28",
		        "Description": "do convert AY, FCA1*(AY)"
		    },
		    {
		        "Address": "BA8C",
		        "Description": "unpack memory (AY) into FAC2"
		    },
		    {
		        "Address": "BAB7",
		        "Description": "test and adjust accumulators"
		    },
		    {
		        "Address": "BAD4",
		        "Description": "handle overflow and underflow"
		    },
		    {
		        "Address": "BAE2",
		        "Description": "multiply FAC1 by 10"
		    },
		    {
		        "Address": "BAF9",
		        "Description": "10 as a floating value"
		    },
		    {
		        "Address": "BAFE",
		        "Description": "divide FAC1 by 10"
		    },
		    {
		        "Address": "BB07",
		        "Description": "divide by (AY) (X=sign)"
		    },
		    {
		        "Address": "BB0F",
		        "Description": "convert AY and do (AY)/FAC1"
		    },
		    {
		        "Address": "BBA2",
		        "Description": "unpack memory (AY) into FAC1"
		    },
		    {
		        "Address": "BBC7",
		        "Description": "pack FAC1 into $5C"
		    },
		    {
		        "Address": "BBCA",
		        "Description": "pack FAC1 into $57"
		    },
		    {
		        "Address": "BBD0",
		        "Description": "pack FAC1 into variable pointer"
		    },
		    {
		        "Address": "BBD4",
		        "Description": "pack FAC1 into (XY)"
		    },
		    {
		        "Address": "BBFC",
		        "Description": "copy FAC2 to FAC1"
		    },
		    {
		        "Address": "BC0C",
		        "Description": "round and copy FAC1 to FAC2"
		    },
		    {
		        "Address": "BC1B",
		        "Description": "round FAC1"
		    },
		    {
		        "Address": "BC2B",
		        "Description": "get FAC1 sign"
		    },
		    {
		        "Address": "BC39",
		        "Description": "perform SGN()"
		    },
		    {
		        "Address": "BC3C",
		        "Description": "save A as integer byte"
		    },
		    {
		        "Address": "BC58",
		        "Description": "perform ABS()"
		    },
		    {
		        "Address": "BC5B",
		        "Description": "compare FAC1 with (AY)"
		    },
		    {
		        "Address": "BC9B",
		        "Description": "convert FAC1 floating to fixed"
		    },
		    {
		        "Address": "BCBB",
		        "Description": "shift FAC1 A times right"
		    },
		    {
		        "Address": "BCCC",
		        "Description": "perform INT()"
		    },
		    {
		        "Address": "BCE9",
		        "Description": "clear FAC1"
		    },
		    {
		        "Address": "BCF3",
		        "Description": "get FAC1 from string"
		    },
		    {
		        "Address": "BD67",
		        "Description": "do - FAC1"
		    },
		    {
		        "Address": "BD6A",
		        "Description": "do unsigned FAC1*10+number"
		    },
		    {
		        "Address": "BD7E",
		        "Description": "evaluate new ASCII digit"
		    },
		    {
		        "Address": "BD91",
		        "Description": "evaluate next character of exponential part of number"
		    },
		    {
		        "Address": "BDB3",
		        "Description": "limits for scientific mode"
		    },
		    {
		        "Address": "BDC2",
		        "Description": "do \" IN \" line number message"
		    },
		    {
		        "Address": "BDCD",
		        "Description": "print XA as unsigned integer"
		    },
		    {
		        "Address": "BDDD",
		        "Description": "convert FAC1 to ASCII string result in (AY)"
		    },
		    {
		        "Address": "BF11",
		        "Description": "constants"
		    },
		    {
		        "Address": "BF3A",
		        "Description": "jiffy counts"
		    },
		    {
		        "Address": "BF52",
		        "Description": "not referenced"
		    },
		    {
		        "Address": "BF53",
		        "Description": "spare bytes, not referenced"
		    },
		    {
		        "Address": "BF71",
		        "Description": "perform SQR()"
		    },
		    {
		        "Address": "BF7B",
		        "Description": "perform power function"
		    },
		    {
		        "Address": "BFBF",
		        "Description": "exp(n) constant and series"
		    },
		    {
		        "Address": "BFED",
		        "Description": "perform EXP()"
		    }
		];

