---
sidebar_position: 1
title: Introduction
---

# A minimal GLFW wrapper, written in Rust
MGLFW stands for 'Minimal GLFW'. It is a wrapper for the [glfw crate](https://crates.io/crates/glfw) which aims to make using GLFW a little easier.

MGLFW is just a little side project I started work on so updates will be infrequent and probably not very good.

## Comparason between standard GLFW and MGLFW
To make a simple blank window that will close on the user pressing Escape, looks like this in the standard crate:
```rust
extern crate glfw;

use glfw::{Action, Context, Key};

fn main() {
    let mut glfw = glfw::init(glfw::fail_on_errors).unwrap();

    let (mut window, events) = glfw.create_window(300, 300, "Hello this is window", glfw::WindowMode::Windowed)
        .expect("Failed to create GLFW window.");

    window.set_key_polling(true);
    window.make_current();

    while !window.should_close() {
        glfw.poll_events();
        for (_, event) in glfw::flush_messages(&events) {
            match event {
                glfw::WindowEvent::Key(Key::Escape, _, Action::Press, _) => {
                    window.set_should_close(true)
                }
                _ => {}
            }
        }
    }
}
```

Now if you were to use MGLFW, it looks like this:
```rust
mod mglfw;

use mglfw::{core, input};

fn main() {
    let mut mglfw = core::Mglfw::new("Hello this is window", 300, 300);
    let mut input = input::Input::init();

    let esc = input.new("esc", input::KeyCode::Escape, input::Activation::Press);

    while mglfw.is_running() {
        mglfw.input_update();

        if input.is_bind_active(&mglfw, &esc) {
            mglfw.quit();
        }
    }
}
```