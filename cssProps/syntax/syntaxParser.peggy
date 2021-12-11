// Custom parser to parse css syntax expressions
//  Ex: "<rgb()> | <color>"
// ==========================

CssSyntax
  = expr:(Expr)+ _ {
  	return [...expr];
  }

Expr
  = Constant
  / ChildSyntax
  / Or

ChildSyntax
  = _ "<" name:SyntaxName ">" { return name }
  
SyntaxName
  = name:[a-zA-Z\-]+ func:"()"? { 
  	const value = name.join('') + (func ? "()" : "");
  	return {
    	type: "CHILD_SYNTAX",
  		value: value
   	}
  }

Or "OR"
  = _ [|] { return { type: "OPERATOR", value: "|" } }

Constant "constant"
  = _ constant:[a-zA-Z]+ {
  	return {
    	type: 'CONSTANT',
  		value: constant.join('')
    }
  }

_ "whitespace"
  = [ \t\n\r]* { return; }