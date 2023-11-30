export const keywords: string[] = [
  // https://dev.mysql.com/doc/refman/8.0/en/keywords.html
  'ACCESSIBLE', // (R)
  'ADD', // (R)
  'ALL', // (R)
  'ALTER', // (R)
  'ANALYZE', // (R)
  'AND', // (R)
  'AS', // (R)
  'ASC', // (R)
  'ASENSITIVE', // (R)
  'BEFORE', // (R)
  'BETWEEN', // (R)
  'BOTH', // (R)
  'BY', // (R)
  'CALL', // (R)
  'CASCADE', // (R)
  'CASE', // (R)
  'CHANGE', // (R)
  'CHECK', // (R)
  'COLLATE', // (R)
  'COLUMN', // (R)
  'CONDITION', // (R)
  'CONSTRAINT', // (R)
  'CONTINUE', // (R)
  'CONVERT', // (R)
  'CREATE', // (R)
  'CROSS', // (R)
  'CUBE', // (R)
  'CUME_DIST', // (R)
  'CURRENT_DATE', // (R)
  'CURRENT_TIME', // (R)
  'CURRENT_TIMESTAMP', // (R)
  'CURRENT_USER', // (R)
  'CURSOR', // (R)
  'DATABASE', // (R)
  'DATABASES', // (R)
  'DAY_HOUR', // (R)
  'DAY_MICROSECOND', // (R)
  'DAY_MINUTE', // (R)
  'DAY_SECOND', // (R)
  'DECLARE', // (R)
  'DEFAULT', // (R)
  'DELAYED', // (R)
  'DELETE', // (R)
  'DENSE_RANK', // (R)
  'DESC', // (R)
  'DESCRIBE', // (R)
  'DETERMINISTIC', // (R)
  'DISTINCT', // (R)
  'DISTINCTROW', // (R)
  'DIV', // (R)
  'DROP', // (R)
  'DUAL', // (R)
  'EACH', // (R)
  'ELSE', // (R)
  'ELSEIF', // (R)
  'EMPTY', // (R)
  'ENCLOSED', // (R)
  'ESCAPED', // (R)
  'EXCEPT', // (R)
  'EXISTS', // (R)
  'EXIT', // (R)
  'EXPLAIN', // (R)
  'FALSE', // (R)
  'FETCH', // (R)
  'FIRST_VALUE', // (R)
  'FOR', // (R)
  'FORCE', // (R)
  'FOREIGN', // (R)
  'FROM', // (R)
  'FULLTEXT', // (R)
  'FUNCTION', // (R)
  'GENERATED', // (R)
  'GET', // (R)
  'GRANT', // (R)
  'GROUP', // (R)
  'GROUPING', // (R)
  'GROUPS', // (R)
  'HAVING', // (R)
  'HIGH_PRIORITY', // (R)
  'HOUR_MICROSECOND', // (R)
  'HOUR_MINUTE', // (R)
  'HOUR_SECOND', // (R)
  'IF', // (R)
  'IGNORE', // (R)
  'IN', // (R)
  'INDEX', // (R)
  'INFILE', // (R)
  'INNER', // (R)
  'INOUT', // (R)
  'INSENSITIVE', // (R)
  'INSERT', // (R)
  'IN', // <-- moved over from functions
  'INTERSECT', // (R)
  'INTERVAL', // (R)
  'INTO', // (R)
  'IO_AFTER_GTIDS', // (R)
  'IO_BEFORE_GTIDS', // (R)
  'IS', // (R)
  'ITERATE', // (R)
  'JOIN', // (R)
  'JSON_TABLE', // (R)
  'KEY', // (R)
  'KEYS', // (R)
  'KILL', // (R)
  'LAG', // (R)
  'LAST_VALUE', // (R)
  'LATERAL', // (R)
  'LEAD', // (R)
  'LEADING', // (R)
  'LEAVE', // (R)
  'LEFT', // (R)
  'LIKE', // (R)
  'LIMIT', // (R)
  'LINEAR', // (R)
  'LINES', // (R)
  'LOAD', // (R)
  'LOCALTIME', // (R)
  'LOCALTIMESTAMP', // (R)
  'LOCK', // (R)
  'LONG', // (R)
  'LOOP', // (R)
  'LOW_PRIORITY', // (R)
  'MASTER_BIND', // (R)
  'MASTER_SSL_VERIFY_SERVER_CERT', // (R)
  'MATCH', // (R)
  'MAXVALUE', // (R)
  'MINUTE_MICROSECOND', // (R)
  'MINUTE_SECOND', // (R)
  'MOD', // (R)
  'MODIFIES', // (R)
  'NATURAL', // (R)
  'NOT', // (R)
  'NO_WRITE_TO_BINLOG', // (R)
  'NTH_VALUE', // (R)
  'NTILE', // (R)
  'NULL', // (R)
  'OF', // (R)
  'ON', // (R)
  'OPTIMIZE', // (R)
  'OPTIMIZER_COSTS', // (R)
  'OPTION', // (R)
  'OPTIONALLY', // (R)
  'OR', // (R)
  'ORDER', // (R)
  'OUT', // (R)
  'OUTER', // (R)
  'OUTFILE', // (R)
  'OVER', // (R)
  'PARTITION', // (R)
  'PERCENT_RANK', // (R)
  'PRIMARY', // (R)
  'PROCEDURE', // (R)
  'PURGE', // (R)
  'RANGE', // (R)
  'RANK', // (R)
  'READ', // (R)
  'READS', // (R)
  'READ_WRITE', // (R)
  'RECURSIVE', // (R)
  'REFERENCES', // (R)
  'REGEXP', // (R)
  'RELEASE', // (R)
  'RENAME', // (R)
  'REPEAT', // (R)
  'REPLACE', // (R)
  'REQUIRE', // (R)
  'RESIGNAL', // (R)
  'RESTRICT', // (R)
  'RETURN', // (R)
  'REVOKE', // (R)
  'RIGHT', // (R)
  'RLIKE', // (R)
  'ROW', // (R)
  'ROWS', // (R)
  'ROW_NUMBER', // (R)
  'SCHEMA', // (R)
  'SCHEMAS', // (R)
  'SECOND_MICROSECOND', // (R)
  'SELECT', // (R)
  'SENSITIVE', // (R)
  'SEPARATOR', // (R)
  'SET', // (R)
  'SHOW', // (R)
  'SIGNAL', // (R)
  'SPATIAL', // (R)
  'SPECIFIC', // (R)
  'SQL', // (R)
  'SQLEXCEPTION', // (R)
  'SQLSTATE', // (R)
  'SQLWARNING', // (R)
  'SQL_BIG_RESULT', // (R)
  'SQL_CALC_FOUND_ROWS', // (R)
  'SQL_SMALL_RESULT', // (R)
  'SSL', // (R)
  'STARTING', // (R)
  'STORED', // (R)
  'STRAIGHT_JOIN', // (R)
  'SYSTEM', // (R)
  'TABLE', // (R)
  'TERMINATED', // (R)
  'THEN', // (R)
  'TO', // (R)
  'TRAILING', // (R)
  'TRIGGER', // (R)
  'TRUE', // (R)
  'UNDO', // (R)
  'UNION', // (R)
  'UNIQUE', // (R)
  'UNLOCK', // (R)
  'UNSIGNED', // (R)
  'UPDATE', // (R)
  'USAGE', // (R)
  'USE', // (R)
  'USING', // (R)
  'UTC_DATE', // (R)
  'UTC_TIME', // (R)
  'UTC_TIMESTAMP', // (R)
  'VALUES', // (R)
  'VIRTUAL', // (R)
  'WHEN', // (R)
  'WHERE', // (R)
  'WHILE', // (R)
  'WINDOW', // (R)
  'WITH', // (R)
  'WRITE', // (R)
  'XOR', // (R)
  'YEAR_MONTH', // (R)
  'ZEROFILL', // (R)
];

export const dataTypes: string[] = [
  // https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  'BIGINT', // (R)
  'BINARY', // (R)
  'BLOB', // (R)
  'CHAR', // (R)
  'CHARACTER', // (R)
  'DEC', // (R)
  'DECIMAL', // (R)
  'DOUBLE', // (R)
  'FLOAT', // (R)
  'FLOAT4', // (R)
  'FLOAT8', // (R)
  'INT', // (R)
  'INT1', // (R)
  'INT2', // (R)
  'INT3', // (R)
  'INT4', // (R)
  'INT8', // (R)
  'INTEGER', // (R)
  'LONGBLOB', // (R)
  'LONGTEXT', // (R)
  'MEDIUMBLOB', // (R)
  'MEDIUMINT', // (R)
  'MEDIUMTEXT', // (R)
  'MIDDLEINT', // (R)
  'NUMERIC', // (R)
  'PRECISION', // (R)
  'REAL', // (R)
  'SMALLINT', // (R)
  'TINYBLOB', // (R)
  'TINYINT', // (R)
  'TINYTEXT', // (R)
  'VARBINARY', // (R)
  'VARCHAR', // (R)
  'VARCHARACTER', // (R)
  'VARYING', // (R)
];
