type PreviewSource = {
  componentName: string;
  previewCode: string;
};

const EXPORT_DEFAULT_FUNCTION_PATTERN =
  /export\s+default\s+function\s+([A-Z]\w*)\s*\(/;

export function createPreviewSource(rawCode: string): PreviewSource {
  const matchedName = rawCode.match(EXPORT_DEFAULT_FUNCTION_PATTERN)?.[1];
  const componentName = matchedName ?? "GeneratedComponent";
  const componentDeclaration = rawCode.replace("export default ", "");

  return {
    componentName,
    previewCode: `${componentDeclaration}\nrender(<${componentName} />);`,
  };
}
