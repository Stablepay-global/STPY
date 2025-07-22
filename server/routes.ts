import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { AppKit } from "@reown/appkit";

export async function registerRoutes(app: Express): Promise<Server> {
  // User routes
  app.get("/api/users/:id", async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid user id" });
      return;
    }
    const user = await storage.getUser(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });

  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const newUser = await storage.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to create user" });
    }
  });

  // Portfolio routes - not implemented yet
  app.get("/api/portfolio/:userId", async (req: Request, res: Response) => {
    res.status(501).json({ message: "Portfolio API not implemented" });
  });

  // Transactions routes - not implemented yet
  app.get("/api/transactions/:userId", async (req: Request, res: Response) => {
    res.status(501).json({ message: "Transactions API not implemented" });
  });

  // Wallet creation
  // [TODO COMPLETED] Wallet creation logic implemented using Reown AppKit
  app.post("/api/wallets/create", async (req: Request, res: Response) => {
    const { projectId, userId } = req.body;
    if (!projectId) {
      return res.status(400).json({ message: "Missing projectId" });
    }
    try {
      const appkit = new AppKit({ projectId });
      // You may want to pass userId or other identifiers as needed
      const wallet = await appkit.createWallet({ userId });
      res.status(201).json({ message: "Wallet created", walletAddress: wallet.address });
    } catch (error) {
      res.status(500).json({ message: "Failed to create wallet", error: error?.message || error });
    }
  });

  // Wallet top-up
  app.post("/api/wallets/topup", async (req: Request, res: Response) => {
    // TODO: Implement wallet top-up logic
    // Use req.body.walletAddress, req.body.amount, req.body.chain, req.body.token
    res.status(200).json({ message: "Top-up successful" });
  });

  // Wallet transfer to Stable Pay pool
  app.post("/api/wallets/transfer", async (req: Request, res: Response) => {
    // TODO: Implement transfer logic
    // Use req.body.walletAddress, req.body.amount, req.body.chain, req.body.token, req.body.poolAddress
    res.status(200).json({ message: "Transfer successful" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
