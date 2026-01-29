/**
 * Tool Configuration Constants
 *
 * Defines core tools available to all models and MCP tool limits
 * Used by tool filtering to determine which tools to include for different models
 */

/**
 * Core tools always available to all models
 * Gpt-oss and other limited-capability models get these core tools only
 */
export const CORE_TOOLS = [
  "Bash",
  "Read",
  "Write",
  "Edit",
  "Glob",
  "Grep",
  "TodoWrite",
  "TodoRead",
  "Task",
  "AskUserQuestion",
]

/**
 * Maximum number of MCP tools to include for limited-capability models
 * Balances user choice (typical 10-20 MCP servers) with context reduction goal
 * OpenAI models have a hard limit of 128 tools
 */
export const MAX_MCP_TOOLS = 40

/**
 * Tool filtering strategy for limited-capability models:
 * - Core tools: 10 (listed in CORE_TOOLS)
 * - MCP tools: up to 40 (MAX_MCP_TOOLS)
 * - Other essential: ~70
 * - Total: < 128 tools (OpenAI limit)
 *
 * For gpt-oss models, this still achieves significant context reduction vs full tool set (~380 tools)
 * For OpenAI models (gpt-5, o3, o4-mini), this respects their 128 tool hard limit
 */
