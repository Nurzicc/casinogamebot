import asyncio
from aiogram import Bot, Dispatcher
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo
from aiogram.filters import CommandStart

TOKEN = "8348943814:AAFaUsVTRBBXAs4ACILQSGEWAAfYxWC69HI"

bot = Bot(TOKEN)
dp = Dispatcher()

@dp.message(CommandStart())
async def start(message: Message):

    kb = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(
                text="✈️ Открыть игру",
                web_app=WebAppInfo(url="https://your-domain.com")
            )]
        ],
        resize_keyboard=True
    )

    await message.answer(
        "Crash Game (FUN version)\n\nБаланс: 1000 FUN",
        reply_markup=kb
    )

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
