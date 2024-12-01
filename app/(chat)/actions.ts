"use server";

import { type CoreUserMessage, generateText } from "ai";
import { cookies } from "next/headers";

import { customModel } from "@/lib/ai";

export async function saveModelId(model: string) {
  const cookieStore = await cookies();
  cookieStore.set("model-id", model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: CoreUserMessage;
}) {
  // const { text: title } = await generateText({
  //   model: customModel('gpt-4o-mini'),
  //   system: `\n
  //   - 你将根据用户对话的第一条消息生成一个简短的标题
  //   - 确保标题不超过80个字符
  //   - 标题应总结用户的消息内容
  //   - 不要使用引号或冒号`,
  //   prompt: JSON.stringify(message),
  // });
  // return title;

  const content = message.content;
  if (!content) {
    return "Untitled";
  }
  return content.toString().slice(0, 80);
}
